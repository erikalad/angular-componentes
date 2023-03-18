import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { CreateProduct, Product, UpdateProduct } from '../models/product.module';
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

  create(data: CreateProduct){
    return this.http.post<Product>(this.apiUrl, data)
  }

  update(id:string, data: any){
    return this.http.put<UpdateProduct>(`${this.apiUrl}/${id}`, data)
  }
}
