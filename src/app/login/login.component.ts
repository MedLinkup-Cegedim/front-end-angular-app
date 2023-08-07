import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

interface FormData {
	natId : string,
	password:string,
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../forms-style.css']
})
export class LoginComponent {
	formData: FormData = {
		natId : '',
		password:''
	};

	constructor(private http: HttpClient, private authService : AuthServiceService, private router: Router) {}

	submitForm() {
		const url = 'https://abbas.requestcatcher.com/test'; // Your API endpoint
		const requestData = {
			name: this.formData.natId,
			email: this.formData.password
		};
		console.log("Sending Post request!!");

		this.signUserIn();

		console.log(requestData)	
		//TODO: fix the problem here??
		// this.http.post(url, requestData).subscribe(
		// 	response => {
		// 	console.log('Post request successful', response);
		// 	// Perform any additional actions after successful POST
		// 	},
		// 	error => {
		// 	console.error('Error sending POST request', error);
		// 	// Handle error cases
		// 	}
		// );
	}

	signUserIn() {
		this.authService.loggUserIn();
		this.router.navigate(["/home"]);

	}

}
