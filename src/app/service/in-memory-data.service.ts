import { Injectable } from '@angular/core';
import { Product } from './product';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): any {
    const products = [
      {
        id: 10001,
        name: 'Round Neck T-shirt',
        price: 999,
        brand: 'Jack & Jones',
        description: 'Men Black Pure Cotton Printed Round Neck T-shirt',
        qty: 20
      },
      {
        id: 10002,
        name: 'Checked Shirt',
        price: 899,
        brand: 'Roadster',
        description: 'Men Black & Grey Checked Casual Shirt',
        qty: 10
      },
      {
        id: 10003,
        name: 'Stretchable Jeans',
        price: 1299,
        brand: 'HIGHLANDER',
        description: 'Men Grey Slim Fit Mid-Rise Clean Look Stretchable Jeans',
        qty: 15
      },
      {
        id: 10004,
        name: 'Kurta',
        price: 2999,
        brand: 'Libas',
        description: 'Women Green Solid Kurta with Trousers & Dupatt',
        qty: 20
      },
      {
        id: 10005,
        name: 'Straight Kurta',
        price: 1599,
        brand: 'Varanga',
        description: 'Women Pink & White Printed Straight Kurta',
        qty: 70
      },
      {
        id: 10006,
        name: 'Women Stretchable Jeans',
        price: 799,
        brand: 'Mast & Harbour',
        description: 'Women Blue Fit Light Fade Acid Wash Stretchable Jeans',
        qty: 40
      },
      {
        id: 10007,
        name: 'Panchakattu',
        price: 999,
        brand: 'Tiber Taber',
        description: 'Boys White Printed Panchakattu',
        qty: 10
      },
      {
        id: 10008,
        name: 'Top with Palazzos',
        price: 499,
        brand: 'Cutiekins',
        description: 'Girls Peach-Coloured & Green Printed Top with Palazzos',
        qty: 20
      },
      {
        id: 10009,
        name: 'Towels',
        price: 1499,
        brand: 'swiss republic',
        description: ' Swiss Republic towels',
        qty: 10
      },
      {
        id: 10010,
        name: 'Glass Cups',
        price: 1799,
        brand: 'GOODHOMES',
        description: 'Set of 6 Transparent Textured Glass Cups Set',
        qty: 20
      }
    ];
    return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 10001;
  }
}
