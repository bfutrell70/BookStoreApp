import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import * as ProductActions from '../../ngrx-state/actions/product.actions';
import { LoadProducts } from 'src/app/state-ngxs/actions/product.actions';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  product: any;

  constructor(
    private router: Router,
    public productService: ProductService) {
      //this.products$ = this.store.select(state => state.products.products);
    }

  ngOnInit(): void {
    //this.store.dispatch(new LoadProducts());
    this.productService.getProducts();
  }
  
  orderProductNow(product: any) {
    console.log('Product to be ordered: ', product);
  }

  removeProductNow(id: number) {
    console.log('Product to be removed: ', id);
  }
}


// import { Component } from '@angular/core';
// import { ProductService } from '../../services/product.service';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';
// import * as ProductActions from '../../ngrx-state/actions/product.actions';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent {

//   //products: any[] = [];
//   products$: Observable<any> | undefined;
//   product: any;

//   constructor(
//     //private productService: ProductService, 
//     private store: Store<{products: any}>,
//     private router: Router) {
//       this.products$ = store.select('products');
//     }

//   ngOnInit(): void {
//     // this.productService.getProducts().subscribe(data => {
//     //   this.products = data;
//     //   console.log('Products: ', this.products);
//     // });
//     this.store.dispatch(ProductActions.loadProducts());
//   }
  
//   orderProductNow(product: any) {
//     console.log('Product to be ordered: ', product);
//   }

//   removeProductNow(id: number) {
//     console.log('Product to be removed: ', id);
//   }
// }
