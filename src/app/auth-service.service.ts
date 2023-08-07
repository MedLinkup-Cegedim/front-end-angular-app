import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

	constructor() { }

	isUser:boolean = false;
	isOrg:boolean = false;
	isloggedIn:boolean = false;

	JWT:string =  "";

	loggUserIn() {
		this.isOrg = false;
		this.isUser = true;
		this.isloggedIn = true;
	}

	loggOrgIn() {
		this.isUser = false;
		this.isOrg = true;
		this.isloggedIn = true;
	}

	logOut(){
		this.isOrg = false;
		this.isUser = false;
		this.isloggedIn = false;
	}

	storeJWT(token:string){
		this.JWT = token;
		localStorage.setItem('jwtToken', this.JWT);
	}

	getJWT(){
		this.JWT = localStorage.getItem('jwtToken') || "";
		return this.JWT
	}
}
