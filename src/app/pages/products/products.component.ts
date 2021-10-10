import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Category, ProductData } from '../../interfaces/interface';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  categories: Category[] = [];
  products: ProductData[] = [];
  promos: ProductData[] = [];
  basicProduct: ProductData[] = [];
  timeLimite: ProductData[] = [];

  categoryId: number[] = [];
  value: any;


  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCategory().then((resp: any) => {
      this.categories = resp.categories.reverse();
      console.log(this.categories)
      this.products = resp.products.sort(function (a: any, b: any) {
        const [one] = a.product_data.categories;
        const [two] = b.product_data.categories;
        return one.ordinal - two.ordinal;
      });
      this.products.forEach(element => {
        const [id] = element.product_data.categories;
        this.categoryId.push(id.category_id)
        this.categoryId = [...new Set(this.categoryId)]
      });

      const [oneId] = this.categoryId.slice(0, 1);
      this.category(oneId);
      const [twoId] = this.categoryId.slice(1, 2);
      this.category(twoId);
      const [threeId] = this.categoryId.slice(2, 3);
      this.category(threeId);
    });

  }

  category(id: number) {
    const kind = (a: any) => {
      const [data]: any = a.product_data.categories;
      return data.category_id === id;
    }
    if (id === 801) {
      this.promos = this.products.filter(kind);
    }
    if (id === 802) {
      this.basicProduct = this.products.filter(kind);
    }
    if (id === 803) {
      this.timeLimite = this.products.filter(kind);
    }
  }
}