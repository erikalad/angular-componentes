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
    image: '',
    price:0,
    category:'',
    description:''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart(){
    this.addedProduct.emit(this.product)

  }

}
