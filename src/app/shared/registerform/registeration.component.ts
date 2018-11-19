import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'register-content',
    templateUrl: 'registeration.component.html',
    styleUrls: ['registeration.component.css']
})

export class RegistrationComponent {
    userForm: FormGroup;

    alertMessage:string='';

    validationMessages = {
        'name': {
            'required': 'Full name is required.',
            'minlength': 'Full name must be greater than 2 characters.',
            'maxlength': 'Full Name must be less than 10 characters'
        },
        'email': {
            'required': 'Email is required'
        },
        'registerPassword': {
            'required': 'Password is required'
        },
        'phone': {
            'required': 'Proficiency is required'
        }
    }

    formErrors = {
        'name': '',
        'email': '',
        'registerPassword': '',
        'phone': ''
    }
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.userForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
            email: ['', Validators.required],
            registerPassword: ['', Validators.required],
            phone: ['', Validators.required]
        });

        this.userForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.userForm);
        })
    }

    logValidationErrors(group: FormGroup = this.userForm): void {
        Object.keys(group.controls).forEach((key: string) => {
            const abstractControl = group.get(key);
            if (abstractControl instanceof FormGroup) {
                this.logValidationErrors(abstractControl);
            } else {
                this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                    const messages = this.validationMessages[key];
                    for (const errorKey in abstractControl.errors) {
                        if (errorKey) {
                            this.formErrors[key] += messages[errorKey] + ' ';
                        }
                    }

                }
            }
        })
    }

    onSubmit(): void {
        console.log(this.userForm.touched);
        console.log(this.userForm.value);
    }
    signUpUser(){
        console.log(this.userForm);
        console.log('Saved: ' + JSON.stringify(this.userForm.value));
        this.alertMessage="User is created successfully."
        console.log(this.alertMessage)
    }

}
