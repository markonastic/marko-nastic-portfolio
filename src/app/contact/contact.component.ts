import { Component, OnDestroy } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { EmailService, IFormspreeResponse } from '../services/email/email.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy {

  public emailSuccess: boolean = null;
  public emailSubscription: Subscription = null;
  public contactForm: FormGroup = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    email: ['', [
      Validators.required,
      Validators.email
      // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]],
    message: ['', [
      Validators.required,
      Validators.minLength(50)
    ]]
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

  public get formControls() {
    return this.contactForm.controls;
  }

  constructor(private emailService: EmailService, private formBuilder: FormBuilder) {}

  public sendEmail(): void {
    this.emailSuccess = null;
    if (this.contactForm.valid) {
      this.emailSubscription = this.emailService.sendEmail(this.name.value, this.email.value, this.message.value)
                       .subscribe(
                         (response: IFormspreeResponse) => this.checkResponse(response),
                         (err: HttpErrorResponse) => this.emailSuccess = false
                       );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  public checkResponse(response: IFormspreeResponse): void {
    this.emailSuccess = (response as IFormspreeResponse).ok;

    if (this.emailSuccess) {
      setTimeout(() => {
        this.emailSuccess = null;
      }, 3000);
      this.resetInputs();
    }
  }

  public resetInputs(): void {
    this.contactForm.reset();
    // this.name.reset();
    // this.email.reset();
    // this.message.reset();
  }

  public ngOnDestroy() {
    this.emailSubscription.unsubscribe();
  }
}
