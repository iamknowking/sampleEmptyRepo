import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [
  { path: "" , component: LandingpageComponent },
  { path: "secondPage" , component: SecondPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
