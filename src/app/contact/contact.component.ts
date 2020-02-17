import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../services/email-service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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

  sanitizedUrl = null;

  contacts = [
    {link: 'https://www.linkedin.com/in/markonastic/', icon: 'fab fa-linkedin'},
    {link: '', icon: 'fab fa-skype'},
    {link: 'mailto:marko.nastic@hotmail.com', icon: 'fas fa-at'},
    {link: 'https://github.com/markonastic', icon: 'fab fa-github'},
    {link: 'assets/Curriculum Vitae - Marko Nastić.pdf', icon: 'fas fa-download'},
  ];

  emailSuccess = false;

  constructor(private sanitizer: DomSanitizer, private emailService: EmailService) {}

  ngOnInit() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('skype:markonastic90?userinfo');
    this.contacts[1].link = this.sanitizedUrl;
  }

  sendEmail() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.name.value, this.email.value, this.message.value)
                        .subscribe(response => this.checkResponse(response));
    } else if (this.name.untouched) {
        this.name.markAsTouched();
    } else if (this.email.untouched) {
      this.email.markAsTouched();
    } else if (this.message.untouched) {
      this.message.markAsTouched();
    }
  }

  checkResponse(response) {
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

  scrollToHome() {
    document.querySelector('#home').scrollIntoView();
  }
}
