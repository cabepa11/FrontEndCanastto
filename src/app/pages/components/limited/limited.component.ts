import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../../../interfaces/interface';

@Component({
  selector: 'app-limited',
  templateUrl: './limited.component.html',
  styleUrls: ['./limited.component.css']
})
export class LimitedComponent implements OnInit {

  @Input() limited!: Product;

  img = environment.img;
  format: string = '@3x.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
