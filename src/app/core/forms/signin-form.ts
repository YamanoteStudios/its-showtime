import { Injectable, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class SigninForm {

    signinForm: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    initForm() {
        return this.signinForm = this.fb.group({
            email: this.fb.control('',
                Validators.compose([
                    Validators.required
                ])
            ),
            password: this.fb.control('',
                Validators.compose([
                    Validators.required
                ])
            )
        })
    }

    get password() {
        return this.signinForm.get('password');
    }

    get email() {
        return this.signinForm.get('email');
    }
}