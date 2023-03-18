import { Component, OnInit } from '@angular/core';
import {Product} from './../../models/product.module'
import {StoreService} from './../../services/store.service'
import {ProductsService} from './../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart : Product[] = [];
  total = 0;
  today= new Date()
  date = new Date(2021,1,21)
  constructor(
    private storeService : StoreService,
    private productsService : ProductsService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  products: Product[] = [ ]
  showProductDetail = false
  productChosen: Product = {
    id:'',
    title: '',
    images: [],
    price:0,
    category:{
      id:'',
      name:''
    },
    description:''

  }

onAddToShoppingCart(product: Product){
  console.log(product)

  this.storeService.addProduct(product)
  this.total = this.storeService.getTotal()
}

ngOnInit(): void {
  this.productsService.getAllProducts()
  .subscribe(data=>{
    console.log(data)
    this.products = data
  })
}
toggleProductDetail(){
  this.showProductDetail = !this.showProductDetail
}


onShowDetail(id:string){
  this.productsService.getProducts(id)
  .subscribe(data=>{
    console.log('product',data);
    this.toggleProductDetail()
    this.productChosen = data;
  })
}

}
