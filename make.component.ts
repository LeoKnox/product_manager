import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent implements OnInit {
  createErrs: any;

  constructor(
    private _httpService: HttpService,
    private router: Router
  ) { }
    item: any;

  makeItem() {
    this._httpService.makeProduct(this.item).subscribe(data => {
      this.createErrs = data;
      console.log(this.createErrs);
      if (this.createErrs.errors==undefined) {
        this.router.navigate(['/list']);
      } 
    })
  }

  ngOnInit() {
    this.item = {title:"", price:0, url:""}
  }

}
