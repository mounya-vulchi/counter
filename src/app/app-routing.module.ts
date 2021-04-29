import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateComponent } from './template/template.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"countries",component:CountriesComponent},
  {path:"details/:name",component:DetailsComponent},
  {path:"reactiveform",component:ReactiveformComponent},
  {path:"template",component:TemplateComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
