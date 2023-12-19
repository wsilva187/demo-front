import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username: string = "";
    password: string = "";
    message: string = "";

    constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    }

    public login(): void {
        sessionStorage.removeItem("app.token");

        this.authService.login(this.username, this.password)
            .subscribe({
                next: (token) => {
                    let response = JSON.parse(token);

                    sessionStorage.setItem("app.token", response.token);

                    const decodedToken = jwtDecode<JwtPayload>(response.token);
                    // @ts-ignore
                    sessionStorage.setItem("app.roles",  decodedToken.role);
                    console.log("OK", decodedToken);
                    this.router.navigateByUrl("/persons");
                },
                error: (error) => this.snackBar.open(`Login failed: ${error.status}`, "OK")
            });
    }
}
