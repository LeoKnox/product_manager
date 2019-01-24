import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http:HttpClient) {
    this.getProducts();
  }

  getProducts(){
    return this._http.get('/api/product');
  }

  oneProduct(id){
    return this._http.get('api/product/' + id);
  }

  makeProduct(item) {
    return this._http.post('/api/product', item);
  }

  editProduct(id, item) {
    return this._http.put('/api/product/' + id, item);
  }

  destroy(id) {
    return this._http.delete('/api/product/' + id);
  }
}
