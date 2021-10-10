import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../interfaces/interface';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  @Input() basic!: Product;
  
  img = environment.img;
  format: string = '@3x.jpg';

  constructor() { }

  ngOnInit(): void {}

}
