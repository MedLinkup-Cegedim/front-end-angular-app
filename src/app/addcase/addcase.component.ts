import { Component } from '@angular/core';

@Component({
  selector: 'app-addcase',
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.css', '../forms-style.css']
})
export class AddcaseComponent {
	selectedCategory: string = ''; // Initialize with an empty string

	onCategorySelected(category: string) {
	  this.selectedCategory = category;
	}
  
}
