import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
	selector: 'app-opencases',
	templateUrl: './opencases.component.html',
	styleUrls: ['./opencases.component.css']
})
export class OpencasesComponent implements OnInit {


	constructor(private authService: AuthServiceService, private http: HttpClient) { }

	ngOnInit(): void {
		const jwtToken: string = this.authService.getJWT();
		const headers = new HttpHeaders({
			'Authorization': `Bearer ${jwtToken}`
		});

		if (jwtToken != "") {
			const headers = new HttpHeaders({
				'Authorization': `Bearer ${jwtToken}`
			});

			this.http.post('127.0.0.1:8000/get-cases', "", { headers }).subscribe(
				postResponse => {
					console.log('Post request with JWT successful', postResponse);
				},
				postError => {
					console.error('Error in post request with JWT', postError);
				}
			);
		}
	}
}
