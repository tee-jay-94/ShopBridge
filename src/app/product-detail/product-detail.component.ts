import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id = 0;
  productForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    price: ['', Validators.required],
    brand: ['', Validators.required],
    description: ['', Validators.required],
    qty: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id') : 0;
    if (this.id) {
      this.getProduct(this.id);
    }
  }

  getProduct(id): void {
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        this.productForm.patchValue({
          id: this.product.id,
          name: this.product.name,
          price: this.product.price,
          brand: this.product.brand,
          description: this.product.description,
          qty: this.product.qty
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.id) {
      this.productService.updateProduct(this.productForm.value)
        .subscribe(() => this.goBack());
    }
    else {
      this.productService.addProduct(this.productForm.value)
        .subscribe(() => this.goBack());
    }
  }

}
