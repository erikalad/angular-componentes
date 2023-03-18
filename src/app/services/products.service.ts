import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http'
import { CreateProduct, Product, UpdateProduct } from '../models/product.module';
import { retry } from 'rxjs/operators'
import {enviroment} from './../../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl =`${enviroment.API_URL}/api/products`
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?:number, offset?:number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl,{params})
    .pipe(
      retry(3)
    )
  }

  getProducts(id:string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  create(data: CreateProduct){
    return this.http.post<Product>(this.apiUrl, data)
  }

  update(id:string, data: any){
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data)
  }

  delete(id:string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }

  getProductsByPage(limit:number,offset:number){
    return this.http.get<Product[]>(this.apiUrl, {
      params:{limit,offset}})
    }

}
