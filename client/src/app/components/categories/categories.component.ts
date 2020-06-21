import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/classes/categories';
import { CategoryService } from 'src/app/servises/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category:categories = new categories();
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  saveCategory()
  {
    this.categoryService.createCategory(this.category).subscribe(
      res=>
      {

      })
  }

}
