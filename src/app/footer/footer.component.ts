import { ContactService } from './../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IContact } from './contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public contacts: IContact[] = null;

  constructor(private contactService: ContactService, private sanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts: IContact[]) => {
      this.contacts = contacts;
      this.sanitizeUrl();
    });
  }

  // Sanitizing skype url because Angular compiler sees it as unsafe
  public sanitizeUrl(): void {
    const skypeContact: IContact = this.contacts.find((contact: IContact) => contact.name === 'skype');
    const sanitizedUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(skypeContact.url);

    skypeContact.url = sanitizedUrl as string;
  }

  public scrollToHome(): void {
    document.querySelector('#home').scrollIntoView();
  }
}
