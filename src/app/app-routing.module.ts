import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { ToolsListPageComponent } from './components/pages/tools-page/children/tools-list-page/tools-list-page.component';
import { ToolsDetailPageComponent } from './components/pages/tools-page/children/tools-detail-page/tools-detail-page.component';
import { PaintsPageComponent } from './components/pages/tools-page/children/paints-page/paints-page.component';

// gallery
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';

// services
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'tutorials',
    component: TutorialsPageComponent
  },
  {
    path: 'tools',
    component: ToolsPageComponent,
    children: [
      {
        path: '',
        component: ToolsListPageComponent
      },
      {
        path: 'id',
        component: ToolsDetailPageComponent,
        children: [
          {
            path: 'paints',
            component: PaintsPageComponent
          }
        ]
      }
    ]
  },
  {
    path: 'gallery',
    component: GalleryPageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: 'faq',
    component: FaqPageComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
