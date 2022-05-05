import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareInstructionsComponent } from './care-instructions/care-instructions.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'copyright', component: CopyrightComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'care', component: CareInstructionsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
