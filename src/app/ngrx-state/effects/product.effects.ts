import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product.service";
import * as ProductActions from '../actions/product.actions';
import { catchError, map, mergeMap } from "rxjs";

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, 
        private productService: ProductService
    ) {}

    loadData$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() => 
                this.productService.getProducts().pipe(
                    map(products => ProductActions.loadProductsSuccess({products})),
                    catchError(error => [ProductActions.loadProductsFailure({error})])
            ))
        ))
}