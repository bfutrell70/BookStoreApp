import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: any;
  
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      const id = p['id'];

      this.productService.getProductById(id).subscribe(result => {
        this.selectedProduct = result;
      });
    })
  }
}
