import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductData } from '../../interfaces/interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products: any;

  img = environment.img;
  format: string = '@3x.jpg';

  constructor() { }

  ngOnInit(): void {
  }



}
