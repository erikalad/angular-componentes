import { Component } from '@angular/core';
import {Product} from './models/product.module'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = '';
  showImg=true;
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


  onLoaded(img:string){
    console.log('log padre',img)
  }

  toggleImg(){
    this.showImg = !this.showImg
  }


}
