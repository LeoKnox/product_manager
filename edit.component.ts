import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getNodeInjectable } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct: any;
  editErrs: any;

  constructor(
      private _httpService: HttpService,
      private router: Router,
      private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.editProduct = {title:"", price:0, url:""}
    this._route.params.subscribe((params: Params) => {
      this.getOne(params['id']);
    })
  }

  getOne(id) {  
      this._httpService.oneProduct(id).subscribe(data => {
        this.editProduct = data;
      })
    }
  
  update(id) {
    this._httpService.editProduct(id, this.editProduct).subscribe(data => {
      this.editErrs=data;
      console.log(this.editErrs);
      console.log(this.editErrs.errors);
      if (this.editErrs.errors==undefined) {
        console.log('hit if check');
        this.router.navigate(['/list']);
      }
    })
  }
}
