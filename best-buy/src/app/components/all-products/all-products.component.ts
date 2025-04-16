import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLProductsService } from '../../services/cl-product.service';
import { CLProduct } from '../../models/cl-product.model';
import { RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class CLAllProductsComponent {
  clAllProducts: CLProduct[] = [];

  constructor(private clProductService: CLProductsService) {
    this.clAllProducts = this.clProductService.clgetAllProducts();
  }
}
