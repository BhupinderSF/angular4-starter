import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ng Model lives here

import { AppComponent } from './default/app.component';
import { HeroService } from './services/hero.service';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './heroDetail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  // Here comes all components that needs include
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  // Here comes all modules that needs to import
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [MessageService, HeroService], // services will come here.
  bootstrap: [AppComponent] // Default component
})
export class AppModule { }
