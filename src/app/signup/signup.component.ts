import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';


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

	constructor(private http: HttpClient, private auth:AuthServiceService) {}
/*
  "email": "user@gmail.com",
  "password": "password",
  "firstname": "John",
  "lastname": "Doe"
*/
	submitForm() {
		const url = '127.0.0.1:8000/user-auth/signup'; // Your API endpoint
		const data = {
			email: this.formData.email,
			password: this.formData.password,
			firstname: this.formData.userName,
			lastname: "Doe"
		};
		console.log("Sending Post request!!");

		this.http.post(url, data).subscribe(
			(response:any)=> {
				console.log('Post request successful', response);
				const jwtToken = response.token;
				this.auth.storeJWT(jwtToken);
			},
			error => {
				console.error('Error sending POST request', error);
			}
		);
	}
}