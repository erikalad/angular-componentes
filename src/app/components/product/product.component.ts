import { Component , Input} from '@angular/core';
import { Product } from './../../models/product.module'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product ={
    id:'',
    name: '',
    image: '',
    price:0,
  }

}
