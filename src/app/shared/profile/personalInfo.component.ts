import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'personal-content',
    templateUrl:'./personalInfo.component.html',
    styleUrls:['personalInfo.component.css']
})

export class PersonalInfoComponent{

    constructor(private router: Router){}


}