import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Product } from '../models/product.module';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl : string = 'https://young-sands-07814.herokuapp.com/api/products'
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.apiUrl)
  }

  getProducts(id:string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
}
