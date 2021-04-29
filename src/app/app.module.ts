import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import{HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import{ ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    CountriesComponent,
    DetailsComponent,
    RegisterComponent,
    ReactiveformComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

