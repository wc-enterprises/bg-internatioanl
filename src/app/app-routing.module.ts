import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UniversityArticlesComponent } from './university-articles/university-articles.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UniversityComponent } from './university/university.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ArticlepageComponent } from './articlepage/articlepage.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'universityarticles', component: UniversityArticlesComponent },
  { path: 'contactform', component: ContactFormComponent },
  { path: 'universities', component: UniversityComponent },
  { path: 'countrydetails', component: CountryDetailsComponent },
  { path: 'articlepage', component: ArticlepageComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
