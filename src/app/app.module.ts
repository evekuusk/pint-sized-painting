import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TutorialsPageComponent } from './pages/tutorials-page/tutorials-page.component';
import { ToolsPageComponent } from './pages/tools-page/tools-page.component';
import { PaintsComponent } from './tools/paints/paints.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    TutorialsPageComponent,
    ToolsPageComponent,
    PaintsComponent,
    TutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
