import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
	userSignedIn: boolean = false;
	organizationSignedIn: boolean = false;

	constructor(private authService : AuthServiceService) {}
	signOut(): void {
		this.authService.logOut();
	}

	get isUserSignedIn(): boolean {
		return this.authService.isUser && this.authService.isloggedIn;
	}

	get isOrganizationSignedIn(): boolean {
		return this.authService.isOrg && this.authService.isloggedIn;
	}
}
