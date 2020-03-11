import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sanitizedUrl = null;

  contacts = [
    {link: 'https://www.linkedin.com/in/markonastic/', icon: 'fab fa-linkedin'},
    {link: '', icon: 'fab fa-skype'},
    {link: 'mailto:marko.nastic@hotmail.com', icon: 'fas fa-at'},
    {link: 'https://github.com/markonastic', icon: 'fab fa-github'},
  ];


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('skype:markonastic90?userinfo');
    this.contacts[1].link = this.sanitizedUrl;
  }

  scrollToHome() {
    document.querySelector('#home').scrollIntoView();
  }
}
