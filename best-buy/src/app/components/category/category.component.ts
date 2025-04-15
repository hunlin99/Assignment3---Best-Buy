import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CLProductsService } from '../../services/cl-product.service';
import { CLProduct } from '../../models/cl-product.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CLCategoryComponent {
  clCategoryProducts: CLProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private clProductService: CLProductsService
  ) {
    this.route.paramMap.subscribe(params => {
      const category = params.get('name');
      if (category) {
        this.clCategoryProducts = this.clProductService.getProductsByCategory(category);
      }
    });
  }
}
