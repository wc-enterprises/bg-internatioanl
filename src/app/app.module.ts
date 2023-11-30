import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UniversityArticlesComponent } from './university-articles/university-articles.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UniversityComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ArticlepageComponent } from './articlepage/articlepage.component';
import { ScrollColorChange } from './common-utils/background-color-change-on-scroll.directive';
import { ScrollChangeColorDirective } from './scroll-change-color.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    UniversityArticlesComponent,
    ContactFormComponent,
    UniversityComponent,
    CountryDetailsComponent,
    ArticlepageComponent,
    ScrollColorChange,
    ScrollChangeColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      // Restore the last scroll position
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: 'enabled',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
