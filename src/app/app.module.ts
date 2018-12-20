import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgArrayPipesModule, NgStringPipesModule } from 'angular-pipes';

// *** MAIN *** //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// *** LAYOUT *** //
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
// side menu
import { SideMenuComponent } from './components/layout/side-menu/side-menu.component';

// *** TOOLS *** //
import { PaintsComponent } from './components/tools/paints/paints.component';

// *** TUTORIALS *** //
import { TutorialsComponent } from './components/tutorials/tutorials.component';

// *** PAGES *** //
// home
import { HomePageComponent } from './components/pages/home-page/home-page.component';

// about
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent } from './components/pages/about-page/children/faq-page/faq-page.component';

// tutorials
import { TutorialsPageComponent } from './components/pages/tutorials-page/tutorials-page.component';

// tools
import { ToolsPageComponent } from './components/pages/tools-page/tools-page.component';
import { PaintsPageComponent } from './components/pages/tools-page/children/paints-page/paints-page.component';
import { ToolsListPageComponent } from './components/pages/tools-page/children/tools-list-page/tools-list-page.component';
import { ToolsDetailPageComponent } from './components/pages/tools-page/children/tools-detail-page/tools-detail-page.component';

// gallery
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';

// services
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';

// *** SERVICES *** //
import { ArrayToolsService } from './services/array-tools.service';
import { PaintToolsService } from './services/paint-tools.service';
import { BioPageComponent } from './components/pages/about-page/children/bio-page/bio-page.component';
import { ContactPageComponent } from './components/pages/about-page/children/contact-page/contact-page.component';
import { PricesPageComponent } from './components/pages/services-page/children/prices-page/prices-page.component';
import { ServicesListPageComponent } from './components/pages/services-page/children/services-list-page/services-list-page.component';
import { ServicesDetailPageComponent } from './components/pages/services-page/children/services-detail-page/services-detail-page.component';
import { SideMenuLayoutComponent } from './components/layout/side-menu-layout/side-menu-layout.component';

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
    SideMenuComponent,
    BioPageComponent,
    ContactPageComponent,
    PricesPageComponent,
    ServicesListPageComponent,
    ServicesDetailPageComponent,
    SideMenuLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgArrayPipesModule,
    NgStringPipesModule
  ],
  providers: [ArrayToolsService, PaintToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
