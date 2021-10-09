import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;  

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCategory().then( (resp:any) => {
        this.categories = resp.categories.reverse(); 

    })
  }
}
