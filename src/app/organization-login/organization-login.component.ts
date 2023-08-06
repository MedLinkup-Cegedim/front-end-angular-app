import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface FormData {
	email:string,
	password:string
};

@Component({
  selector: 'app-organization-login',
  templateUrl: './organization-login.component.html',
  styleUrls: ['./organization-login.component.css', '../forms-style.css']
})
export class OrganizationLoginComponent {
	formData: FormData = {
		email:'',
		password:''
	};

	constructor(private http: HttpClient) {}

	submitForm() {
		const url = 'https://abbas.requestcatcher.com/test'; // Your API endpoint
		const requestData = {
			email: this.formData.email,
			password: this.formData.password
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
