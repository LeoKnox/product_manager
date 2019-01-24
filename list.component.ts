import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getAll();
    })
  }

  getAll() {
    this._httpService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

  deleteMe(id) {
    this._httpService.destroy(id).subscribe(data => {
      console.log(data);
    })
    this.getAll();
  }
}
