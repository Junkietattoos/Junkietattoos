import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LanguageComponent } from './language/language.component';


const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'copyright', component: CopyrightComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'language', component: LanguageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
