import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    credentials: TokenPayload = {
        id: 0,
        name: '',
        login: '',
        password: ''
    }

    constructor(private auth: AuthenticationService, private router: Router) {}

    login() {
        this.auth.login(this.credentials).subscribe(
            (data) => {
                this.router.navigateByUrl('/profile');
                alert(data.error);
            },
            err => {
                console.error(err);
            }
        )
    }
}
