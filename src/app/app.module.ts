import { SkillsService } from './services/skills/skills.service';
import { ProjectsService } from './services/projects/projects.service';
import { ContactService } from './services/contact/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { ButtonComponent } from './common/button/button.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './projects/project-view/gallery/gallery.component';
import { DetailsComponent } from './projects/project-view/details/details.component';
import { EmailService } from './services/email/email.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectViewComponent,
    ButtonComponent,
    FooterComponent,
    GalleryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    EmailService,
    ProjectsService,
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
