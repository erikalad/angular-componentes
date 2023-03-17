import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img:string='';
  @Output() loaded = new EventEmitter<string>()
  imageDefault="./../../../assets/images/cargando.gif";

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }

  constructor(){
    // despues del render
    // no async -- solo una vez
    console.log('constructor', 'imgValue=>', this.img)
  }

}
