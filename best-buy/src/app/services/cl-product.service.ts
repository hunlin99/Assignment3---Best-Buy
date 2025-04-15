import { Injectable } from '@angular/core';
import { CLProduct } from '../models/cl-product.model';

@Injectable({
  providedIn: 'root'
})
export class CLProductsService {
  private clProducts: CLProduct[] = [
    { clId: 1, clName: 'Amazon Fire TV Stick 4K Max Media Streamer', clCategory: 'TVs', clPhoto: 'firestick.jpeg', clDescription: '', clPrice: 0 },
    { clId: 2, clName: 'LG 50" 4K UHD HDR LED webOS Smart TV', clCategory: 'TVs', clPhoto: 'lgtv.jpeg', clDescription: '', clPrice: 0 },
    { clId: 3, clName: 'Apple MacBook Air 13.3" w/ Touch ID', clCategory: 'Computers', clPhoto: 'macbook.jpeg', clDescription: '', clPrice: 0 },
    { clId: 4, clName: 'Lenovo IdeaPad Flex 5 13.3" Touchscreen 2-in-1 Chromebook', clCategory: 'Computers', clPhoto: 'tablet.jpeg', clDescription: '', clPrice: 0 },
    { clId: 5, clName: 'Bosch 36" 21 Cu. Ft. Counter-Depth 4-Door French Door Refrigerator', clCategory: 'Appliances', clPhoto: 'fridge.jpeg', clDescription: '', clPrice: 0 },
    { clId: 6, clName: 'Bosch 30" 3.7 Cu. Ft. True Convection 5-Burner Stove', clCategory: 'Appliances', clPhoto: 'stove.jpeg', clDescription: '', clPrice: 0 },
    // add more products as needed
  ];

  getAllProducts(): CLProduct[] {
    return this.clProducts;
  }

  getProductsByCategory(category: string): CLProduct[] {
    return this.clProducts.filter(product => product.clCategory === category);
  }
}
