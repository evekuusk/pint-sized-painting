import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// *** PAGES *** //
// home
import { HomePageComponent } from './components/pages/home-page/home-page.component';

// about
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent } from './components/pages/about-page/children/faq-page/faq-page.component';
import { BioPageComponent } from './components/pages/about-page/children/bio-page/bio-page.component';
import { ContactPageComponent } from './components/pages/about-page/children/contact-page/contact-page.component';

// tutorials
import { TutorialsPageComponent } from './components/pages/tutorials-page/tutorials-page.component';

// tools
import { ToolsPageComponent } from './components/pages/tools-page/tools-page.component';
import { ToolsListPageComponent } from './components/pages/tools-page/children/tools-list-page/tools-list-page.component';
import { ToolsDetailPageComponent } from './components/pages/tools-page/children/tools-detail-page/tools-detail-page.component';
import { PaintsPageComponent } from './components/pages/tools-page/children/paints-page/paints-page.component';

// gallery
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { GalleryListPageComponent } from './components/pages/gallery-page/children/gallery-list-page/gallery-list-page.component';
import { GalleryDetailPageComponent } from './components/pages/gallery-page/children/gallery-detail-page/gallery-detail-page.component';

// services
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServicesListPageComponent } from './components/pages/services-page/children/services-list-page/services-list-page.component';
import { ServicesDetailPageComponent } from './components/pages/services-page/children/services-detail-page/services-detail-page.component';
import { PricesPageComponent } from './components/pages/services-page/children/prices-page/prices-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent,
    children: [
      {
        path: '',
        component: BioPageComponent
      },
      {
        path: 'faq',
        component: FaqPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      }
    ]
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
    component: GalleryPageComponent,
    children: [
      {
        path: '',
        component: GalleryListPageComponent
      },
      {
        path: '**',
        component: GalleryDetailPageComponent
      }
    ]
    // children: [
    //   {
    //     path: '',
    //     component: GalleryListPageComponent
    //   },
    //   {
    //     path: 'chaos',
    //     component: GalleryListPageComponent,
    //     children: [
    //       {
    //         path: '',
    //         component: GalleryListPageComponent
    //       },
    //       {
    //         path: 'daemons-of-nurgle',
    //         component: GalleryListPageComponent,
    //         children: [
    //           {
    //             path: '',
    //             component: GalleryListPageComponent
    //           },
    //           {
    //             path: 'blightkings',
    //             component: GalleryDetailPageComponent
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    children: [
      {
        path: '',
        component: ServicesListPageComponent
      },
      {
        path: 'id',
        component: ServicesDetailPageComponent,
        children: [
          {
            path: 'prices',
            component: PricesPageComponent
          }
        ]
      }
    ]
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
