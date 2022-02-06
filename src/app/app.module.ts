import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostRequirementComponent } from './post-requirement/post-requirement.component';

@NgModule({
  declarations: [
    AppComponent,
    PostRequirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
