import { Component,Input,Output, EventEmitter,OnChanges,AfterViewInit,OnDestroy, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit , AfterViewInit , OnDestroy{
  img:string='';

  @Input('img')
  set changeImg(newImg : string){
    this.img = newImg;
    //puedo escribir codigo que se haga una vez que se cambio la imagen
    console.log('change just img => ', this.img)
  }
  @Output() loaded = new EventEmitter<string>()
  imageDefault="./../../../assets/images/cargando.gif";
  counter=0;
  counterFn : number | undefined;

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    /* console.log('log hijo') */
    this.loaded.emit(this.img);
  }

  constructor(){
    // despues del render
    // no async -- solo una vez
    console.log('constructor', 'imgValue=>', this.img)

  }
  ngOnChanges(changes: SimpleChanges): void {
    //corre antes y durante el render y su objetivo es estar actualizando los inputs
    /* console.log('ngOnChanges', 'imgValue=>', this.img) */
  }
  ngOnInit(): void {
    //corre antes del render, podemos pasar async, fetch, promesas, solo se llama 1 vez
/*     console.log('ngOnInit', 'imgValue=>', this.img) */
 /*    this.counterFn = window.setInterval(()=>{
      this.counter += 1
      console.log('run counter')
    },1000) */
  }
  ngAfterViewInit(): void {
    //despues de que se este renderizando, se manejan los hijos. ejecutar eventos
    /* console.log('ngAfterViewInit', 'imgValue=>', this.img) */
  }
  ngOnDestroy(): void {
    //cuando se borra el componente
/*     console.log('ngOnDestroy', 'imgValue=>', this.img) */
    window.clearInterval(this.counterFn)
  }



}

//CICLO DE VIDA

//1- constructor
//2- ngOnChanges
//3- ngOnInit
//4- ngDoCheck ---> ngAfterContentinit
//                  ngAfterContentCheked
//                  ngAfterViewInit
//                  ngAfterViewChecked
//ngOnDestroy
