import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../authentication.service';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    users: [];

    constructor(private auth: AuthenticationService) {}

    ngOnInit() {
        this.auth.profile().subscribe(
            user => (
                  this.users = user
              ),
            err => {
                console.log(err);
            }
        )
    }
}
