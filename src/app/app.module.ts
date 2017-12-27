import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ng Model lives here

import { AppComponent } from './default/app.component';
import { HeroDetailComponent } from './heroDetail/hero-detail.component';
// import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [], // services will come here.
  bootstrap: [AppComponent]
})
export class AppModule { }
