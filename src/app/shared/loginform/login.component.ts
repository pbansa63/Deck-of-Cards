import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'login-content',
    templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    ngOnInit() {
        this.loginForm = new FormGroup(
            {
                username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
                password: new FormControl(null, [Validators.required, Validators.maxLength(8)])
            });
    }

    constructor(public dialog: MatDialog,private router:Router) { }

    loginUser() {

        console.log(this.loginForm.status);
        console.log(this.loginForm.value);

        this.router.navigate(['personalInfo']);
    }
    btnLogin(){
        this.router.navigate(['personalInfo']);
        //this.router.navigateByUrl('/personalInfo');
    }
}


