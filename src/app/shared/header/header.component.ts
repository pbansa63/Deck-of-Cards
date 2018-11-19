import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LoginComponent } from '../loginform/login.component';
import {RegistrationComponent} from '../registerform/registeration.component';

@Component({
    selector: 'app-header',
    templateUrl: '../header/header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    loginForm: FormGroup;
    ngOnInit() {
       
    }

    constructor(public dialog: MatDialog) { }
    openDialog() {
        const dialogRef = this.dialog.open(LoginComponent, { position: { top: '0px', left: '0px' } });

    }
}

// @Component({
//     selector: 'register-content',
//     templateUrl: '../registerform/registeration.component.html',
//     styleUrls: ['./registeration.component.css']
// })

// export class RegistrationComponent {}
