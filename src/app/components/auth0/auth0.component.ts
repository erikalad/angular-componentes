import { Component } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  template: '<button (click)="login">Log in</button>',
  styles: [],
})
export class LoginComponent {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}

  login(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();
  }
}
