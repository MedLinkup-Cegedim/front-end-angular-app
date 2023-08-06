import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface FormData {
	title : string,
	desc:string,
};

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

	formData: FormData = {
		title : '',
		desc:''
	};
	constructor(private http: HttpClient) {}
	submitForm() {
		const url = 'https://abbas.requestcatcher.com/test'; // Your API endpoint
		const requestData = {
			title: this.formData.title,
			desc: this.formData.desc
		};
		console.log("Sending Post request!!");

		this.http.post(url, requestData).subscribe(
			response => {
				console.log('Post request successful', response);
				// Perform any additional actions after successful POST
			},
			error => {
				console.error('Error sending POST request', error);
				// Handle error cases
			}
		);
	}
}
