import { Component } from '@angular/core';
import {Product} from './../../models/product.module'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart : Product[] = [];
  total = 0;


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

onAddToShoppingCart(product: Product){
  console.log(product)
  this.myShoppingCart.push(product);
  this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.price,0)
}

}
