import { Component } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout',
  template: '<button (click)="logout">Log out</button>',
  styles: [],
})
export class LogoutComponent {
  // Inject the authentication service into your component through the constructor
  constructor( private doc: Document, public auth: AuthService) {}

  logout(): void {
    // Call this to redirect the user to the login page
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin
      }
    });
  }
}
