import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { Category } from '../../interfaces/interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];  

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCategory().then( (resp:any) => {
        this.categories = resp.categories.reverse(); 

    })
  }
}
