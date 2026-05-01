import { Action, State, StateContext } from "@ngxs/store";
import { ProductService } from "src/app/services/product.service";
import { LoadProducts, LoadProductsFailure, LoadProductsSuccess } from "../actions/product.actions";
import { catchError, of, tap } from "rxjs";
import { Injectable } from "@angular/core";

export interface ProductStateModel {
    products: any[],
    error: any,
    loading: boolean
}

@State<ProductStateModel>({
    name: 'products',
    defaults: {
        products: [],
        error: null,
        loading: false
    }
})

@Injectable()
export class ProductState {
    constructor(private productService: ProductService) {}

    @Action(LoadProducts)
    loadProducts(ctx: StateContext<ProductStateModel>) {
        ctx.patchState({ loading: true});
        
        return this.productService.getProducts().pipe(
            // updates part of the state
            tap((result) => {
                ctx.dispatch(new LoadProductsSuccess(result));
            }),
            // catches errors
            catchError((error) => {
                ctx.dispatch(new LoadProductsFailure(error));

                return of(error);
            })
        )
    }

    @Action(LoadProductsSuccess)
    loadProductsSuccess(ctx: StateContext<ProductStateModel>, action: LoadProductsSuccess) {
        ctx.patchState({
            products: action.payload,
            loading: false
        })
    }

    @Action(LoadProductsFailure)
    loadProductsFailure(ctx: StateContext<ProductStateModel>, action: LoadProductsFailure) {
        ctx.patchState({
            error: action.payload,
            loading: false
        })
    }
}