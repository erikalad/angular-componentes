import { Component , OnInit,Output,EventEmitter , } from '@angular/core';
import { StoreService} from './../../services/store.service'
import {Product, CreateProduct, UpdateProduct} from './../../models/product.module'
import {ProductsService} from './../../services/products.service'
import { CategoriesService} from './../../services/categories.service'
import { Category } from 'src/app/models/categoy.model';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  myShoppingCart : Product[] = [];
  total = 0;
  today= new Date()
  date = new Date(2021,1,21)
  categories: Category[] = []
  activeCart=false

  constructor(
    private storeService : StoreService,
    private productsService : ProductsService,
    private categoriesService : CategoriesService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart()
    this.total = this.storeService.getTotal()
  }



  @Output() showCart = new EventEmitter<string>();


  activeMenu = false;
  counter =0;
  toggleMenu(){
    this.activeMenu = !this.activeMenu
  }
  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
    this.counter = products.length
    this.total = this.storeService.getTotal()
    })
    this.total = this.storeService.getTotal()
    console.log(this.total)
    this.getAllCategories()
  }

  showAddToCart(){
    this.activeCart = !this.activeCart

  }



  onAddToShoppingCart(product: Product){


    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }

  getAllCategories(){
    this.categoriesService.getAll()
    .subscribe(data =>{
      this.categories=data
    })
  }
}
