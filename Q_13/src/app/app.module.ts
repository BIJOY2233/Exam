import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"",component:RegisterpageComponent}
     
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
