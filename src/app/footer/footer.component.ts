import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IContact } from '../interfaces/contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public contacts: IContact[] = [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/markonastic/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'skype',
      url: 'skype:markonastic90?chat',
      icon: 'fab fa-skype'
    },
    {
      name: 'mail',
      url: 'mailto:marko.nastic@hotmail.com',
      icon: 'fas fa-at'
    },
    {
      name: 'github',
      url: 'https://github.com/markonastic',
      icon: 'fab fa-github'
    }
  ];

  constructor(private sanitizer: DomSanitizer,
              private viewportScroller: ViewportScroller
             ) {}

  public ngOnInit(): void {
    this.sanitizeUrl();
  }

  // Sanitizing skype url because Angular compiler sees it as unsafe
  public sanitizeUrl(): void {
    const skypeContact: IContact = this.contacts.find((contact: IContact) => contact.name === 'skype');
    const sanitizedUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(skypeContact.url);

    skypeContact.url = sanitizedUrl as string;
  }

  public scrollToAnchor(): void {
    this.viewportScroller.scrollToAnchor('home');
  }
}
