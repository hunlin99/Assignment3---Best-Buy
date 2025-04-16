import { Injectable } from '@angular/core';
import { CLProduct } from '../models/cl-product.model';

@Injectable({
  providedIn: 'root'
})
export class CLProductsService {
  private clProducts: CLProduct[] = [
    { clId: 1, clName: 'Amazon Fire TV Stick 4K Max Media Streamer', clCategory: 'TVs', clPhoto: 'firestick.jpeg', clDescription: 'Stream your favorite content in stunning 4K with the Fire TV Stick Max. Fast, responsive, and Alexa-enabled for hands-free control.', clPrice: 34.50 },
    { clId: 2, clName: 'LG 50" 4K UHD HDR LED webOS Smart TV', clCategory: 'TVs', clPhoto: 'lgtv.jpeg', clDescription: 'Experience crystal-clear visuals and vibrant colors with LG’s 50" 4K Smart TV, powered by webOS for easy access to streaming apps.', clPrice: 400 },
    { clId: 3, clName: 'Apple MacBook Air 13.3" w/ Touch ID', clCategory: 'Computers', clPhoto: 'macbook.jpeg', clDescription: 'Lightweight, powerful, and secure. The MacBook Air features a 13.3" Retina display and Touch ID for fast and safe access.', clPrice: 1399 },
    { clId: 4, clName: 'Lenovo IdeaPad Flex 5 13.3" Touchscreen 2-in-1 Chromebook', clCategory: 'Computers', clPhoto: 'tablet.jpeg', clDescription: 'A versatile 2-in-1 Chromebook with touchscreen capability, perfect for work, streaming, or creativity on the go.', clPrice: 200 },
    { clId: 5, clName: 'Bosch 36" 21 Cu. Ft. Counter-Depth 4-Door French Door Refrigerator', clCategory: 'Appliances', clPhoto: 'fridge.jpeg', clDescription: 'Spacious and smart, this Bosch fridge features 4 doors and advanced cooling technology to keep your groceries fresh longer.', clPrice: 790 },
    { clId: 6, clName: 'Bosch 30" 3.7 Cu. Ft. True Convection 5-Burner Stove', clCategory: 'Appliances', clPhoto: 'stove.jpeg', clDescription: 'Cook like a pro with Bosch’s 5-burner convection stove, designed for even heat distribution and precise temperature control.', clPrice: 550 },
  ];

  clgetAllProducts(): CLProduct[] {
    return this.clProducts;
  }

  clgetProductsByCategory(category: string): CLProduct[] {
    return this.clProducts.filter(product => product.clCategory === category);
  }

  clgetProductById(id: number): CLProduct | undefined {
    return this.clProducts.find(product => product.clId === id);
  }
}
