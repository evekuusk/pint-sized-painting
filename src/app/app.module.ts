import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { PaintsPageComponent } from './pages/tools-children/paints-page/paints-page.component';
import { ToolsListPageComponent } from './pages/tools-children/tools-list-page/tools-list-page.component';
import { ToolsDetailPageComponent } from './pages/tools-children/tools-detail-page/tools-detail-page.component';
import { SideToolsMenuComponent } from './layout/side-tools-menu/side-tools-menu.component';

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
    TutorialsComponent,
    GalleryPageComponent,
    ServicesPageComponent,
    FaqPageComponent,
    PaintsPageComponent,
    ToolsListPageComponent,
    ToolsDetailPageComponent,
    SideToolsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
