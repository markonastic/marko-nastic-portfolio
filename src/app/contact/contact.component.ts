import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EmailService, IFormspreeResponse } from '../services/email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public emailSuccess: boolean = false;

  public contactForm: FormGroup = new FormGroup({
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

  public get name(): AbstractControl {
    return this.contactForm.get('name');
  }

  public get email(): AbstractControl {
    return this.contactForm.get('email');
  }

  public get message(): AbstractControl {
    return this.contactForm.get('message');
  }

  constructor(private emailService: EmailService) {}

  public sendEmail(): void {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.name.value, this.email.value, this.message.value)
                       .subscribe((response: IFormspreeResponse) => this.checkResponse(response));
    } else if (this.name.untouched || this.name.invalid) {
        this.name.markAsTouched();
    } else if (this.email.untouched || this.email.invalid) {
      this.email.markAsTouched();
    } else if (this.message.untouched) {
      this.message.markAsTouched();
    }
  }

  public checkResponse(response: IFormspreeResponse): void {
    this.emailSuccess = response.ok;

    if (this.emailSuccess) {
      setTimeout(() => {
        this.emailSuccess = false;
      }, 4000);
      this.resetInputs();
    }
  }

  public resetInputs(): void {
    this.name.reset();
    this.email.reset();
    this.message.reset();
  }
}
