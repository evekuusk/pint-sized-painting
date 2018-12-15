import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TutorialsPageComponent } from './pages/tutorials-page/tutorials-page.component';
import { ToolsPageComponent } from './pages/tools-page/tools-page.component';
  import { ToolsListPageComponent } from './pages/tools-children/tools-list-page/tools-list-page.component';
  import { ToolsDetailPageComponent } from './pages/tools-children/tools-detail-page/tools-detail-page.component';
    import { PaintsPageComponent } from './pages/tools-children/paints-page/paints-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';

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
