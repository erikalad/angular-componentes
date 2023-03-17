import { Component } from '@angular/core';
import {Product} from './../../models/product.module'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [ {
    id: '1',
    name: 'Automovil de juguete',
    price: 100,
    image: './assets/images/toy.jpg'
},
{
    id: '2',
    name: 'Muñeca de trapo',
    price: 180,
    image: './assets/images/glasses.jpg'
},
{
    id: '3',
    name: 'Pelota de futbol',
    price: 120,
    image: './assets/images/house.jpg'
}]

}
