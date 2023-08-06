import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface FormData {
	natId : string,
	userName: string,
	dateOfBirth:Date,
	email: string,
	password:string,
	phoneNumber:string
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', "../forms-style.css"]
})
export class SignupComponent {
	formData: FormData = {
		natId : '',
		userName: '',
		dateOfBirth: new Date(),
		email: '',
		password:'',
		phoneNumber:''
	};

	constructor(private http: HttpClient) {}

	submitForm() {
		const url = 'https://abbas.requestcatcher.com/test'; // Your API endpoint
		const requestData = {
			name: this.formData.userName,
			email: this.formData.email
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