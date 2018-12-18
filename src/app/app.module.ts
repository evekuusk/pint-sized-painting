import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// *** MAIN *** //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// *** LAYOUT *** //
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SideToolsMenuComponent } from './components/layout/side-tools-menu/side-tools-menu.component';

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
  providers: [ArrayToolsService, PaintToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
