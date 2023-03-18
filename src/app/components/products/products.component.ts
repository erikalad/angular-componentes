import { Component } from '@angular/core';
import {Product} from './../../models/product.module'
import {StoreService} from './../../services/store.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart : Product[] = [];
  total = 0;

  constructor(
    private storeService : StoreService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  products: Product[] = [ {
    id: '1',
    name: 'Muñeca de trapo',
    price: 100,
    image: './assets/images/toy.jpg'
},
{
    id: '2',
    name: 'Los mejores anteojos',
    price: 180,
    image: './assets/images/glasses.jpg'
},
{
    id: '3',
    name: 'Casita de jueguete',
    price: 120,
    image: './assets/images/house.jpg'
}]


onAddToShoppingCart(product: Product){
  console.log(product)

  this.storeService.addProduct(product)
  this.total = this.storeService.getTotal()
}

}
