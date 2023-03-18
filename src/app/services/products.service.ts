import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpErrorResponse, HttpStatusCode} from '@angular/common/http'
import { CreateProduct, Product, UpdateProduct } from '../models/product.module';
import { retry ,catchError} from 'rxjs/operators'
import { throwError} from 'rxjs'
import {enviroment} from './../../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl =`https://young-sands-07814.herokuapp.com/api/products`
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
    .pipe(
      catchError((error: HttpErrorResponse)=>{
        if(error.status === HttpStatusCode.Conflict){
          return throwError('Algo está fallando en el server')
        }
        if(error.status === HttpStatusCode.NotFound){
          return throwError('El producto no existe')
        }
        if(error.status === HttpStatusCode.Unauthorized){
          return throwError('No estás autorizado')
        }
        return throwError('Ups')
      })
    )
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
