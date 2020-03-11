import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService, FormspreeResponse } from '../services/email-service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  emailSuccess = false;

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
    ]),
  });

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  constructor(private emailService: EmailService) {}

  sendEmail() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.name.value, this.email.value, this.message.value)
                        .subscribe((response: FormspreeResponse) => this.checkResponse(response));
    } else if (this.name.untouched || this.name.invalid) {
        this.name.markAsTouched();
    } else if (this.email.untouched || this.email.invalid) {
      this.email.markAsTouched();
    } else if (this.message.untouched) {
      this.message.markAsTouched();
    }
  }

  checkResponse(response: FormspreeResponse) {
    this.emailSuccess = response.ok;
    if (this.emailSuccess) {
      setTimeout(() => {
        this.emailSuccess = false;
      }, 4000);
      this.resetInputs();
    }
  }

  resetInputs() {
    this.name.reset();
    this.email.reset();
    this.message.reset();
  }
}
