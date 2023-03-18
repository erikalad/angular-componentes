import { Component , Input,Output,EventEmitter } from '@angular/core';
import { Product } from './../../models/product.module'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{



  @Input() product: Product ={
    id:'',
    title: '',
    images: [],
    price:0,
    category:{
      id:'',
      name:''
    },
    description:'',
    taxes:0
  }

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetail = new EventEmitter<string>();

  onAddToCart(){
    this.addedProduct.emit(this.product)

  }

  onShowDetail(){
    this.showDetail.emit(this.product.id)
  }



}
