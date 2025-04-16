// src/app/components/product-detail/product-detail.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CLProductsService } from '../../services/cl-product.service';
import { CLProduct } from '../../models/cl-product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class CLProductDetailComponent {
  clProduct?: CLProduct;

  constructor(private route: ActivatedRoute, private productService: CLProductsService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clProduct = this.productService.clgetProductById(id);
  }
}

