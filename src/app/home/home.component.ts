import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, Subject, of} from 'rxjs';

// services //
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];
  ProductList: any = [];

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.GetProducts();        
  }

  //async ngOnInit() {
    GetProducts() {
      return this.dataService.GetProducts().subscribe((data: {}) => {
          //return this.dataService.GetProducts().pipe(takeUntil(this.destroy$)).subscribe((data: {}) => {
        console.log(data);
        this.ProductList = data;
      })
  
  }
  }
//}
