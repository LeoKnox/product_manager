import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  product: any;

  ngOnInit(){
  }

  getProductsService(){
    let observable = this._httpService.getProducts().subscribe(products => {
      console.log("Got product", products);
      this.product = products;
    })
  }

  title = 'Products';
}
