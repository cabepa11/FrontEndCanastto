import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../interfaces/interface';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  @Input() promos!: Product;

  img = environment.img;
  format: string = '@3x.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
