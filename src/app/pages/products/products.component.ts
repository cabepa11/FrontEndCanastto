import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Category, Product, ProductData } from '../interfaces/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  categories: Category[]=[];  
  products: ProductData[] = [];


  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCategory().then( (resp:any) => {
      this.categories = resp.categories.reverse(); 
      this.products = resp.products.sort(function (a:any,b:any) {
        return a.product_data.categories.ordinal - b.product_data.categories.ordinal
      });
        console.log(this.products);
    });
  }
}