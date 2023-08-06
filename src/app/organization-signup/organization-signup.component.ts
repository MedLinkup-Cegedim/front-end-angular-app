import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface FormData {
	name : string,
	email:string,
	password:string
};

@Component({
  selector: 'app-organization-signup',
  templateUrl: './organization-signup.component.html',
  styleUrls: ['./organization-signup.component.css', '../forms-style.css']
})
export class OrganizationSignupComponent {
	formData: FormData = {
		name : '',
		email:'',
		password:''
	};

	constructor(private http: HttpClient) {}

	submitForm() {
		const url = 'https://abbas.requestcatcher.com/test'; // Your API endpoint
		const requestData = {
			name: this.formData.name,
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
