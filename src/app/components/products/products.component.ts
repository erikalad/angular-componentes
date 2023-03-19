import { Component, OnInit } from '@angular/core';
import {Product, CreateProduct, UpdateProduct} from './../../models/product.module'
import {StoreService} from './../../services/store.service'
import {ProductsService} from './../../services/products.service'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { zip } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  limit=10;
  offset=0;
  statusDetail: SweetAlert2Module=''

onAddToShoppingCart(product: Product){
  this.storeService.addProduct(product)
  this.total = this.storeService.getTotal()

  console.log(this.total)
}

ngOnInit(): void {
  this.productsService.getProductsByPage(10,0)
  .subscribe(data=>{

    this.products = data
  })
  this.total = this.storeService.getTotal()
  console.log(this.total)
}
toggleProductDetail(){
  this.showProductDetail = !this.showProductDetail
}


onShowDetail(id:string){
  this.statusDetail = 'loading'
  this.toggleProductDetail()
  this.productsService.getProducts(id)

  .subscribe(data=>{
    this.productChosen = data;
    this.statusDetail='success'
  }, errorMsg=>{
    window.alert(errorMsg)
    this.statusDetail ='error'
  })
}




crateNewProduct(){
  const product: CreateProduct = {
    title:'Nuevo producto',
    description: 'bla bla',
    images:['http://placeimg.com/640/480/any'],
    price:1000,
    categoryId: 2,
  }
  this.productsService.create(product)
  .subscribe(data=>{
    this.products.unshift(data)
  })
}

updateProduct(){
  const changes: UpdateProduct ={
    title:'nuevo title'
  }
  const id= this.productChosen.id
  this.productsService.update(id,changes)
  .subscribe(data=>{
   const productIndex = this.products.findIndex(item=> item.id === this.productChosen.id)
   this.products[productIndex] = data;
   this.productChosen = data;
  })
}

deleteProduct(){
  const id= this.productChosen.id;
  this.productsService.delete(id)
  .subscribe(()=>{
    const productIndex= this.products.findIndex(item=> item.id === this.productChosen.id)
    this.products.splice(productIndex,1)
    this.showProductDetail = false;
    this.limit +=1
    this.offset=0
    this.loadMore(this.limit,this.offset)
  })
}

loadMore(limit:number,offset:number){
  this.productsService.getProductsByPage(this.limit,this.offset)
  .subscribe(data=>{
    this.products=this.products.concat(data)
    this.offset += this.limit
})
}

//EJEMPLO

readAndUpdate(id:string){
  this.productsService.getProducts(id)
  .pipe(
    switchMap((product)=> this.productsService.update(product.id,{title:'change'})),
   /*  .subscribe(data=>{
      console.log(data)
    }) */
  )
  zip(
    this.productsService.getProducts(id),
    this.productsService.update(id,{title:'new'})
  )
  .subscribe(response=>{
    const read = response[0];
    const update = response[1];
  })
}




}
