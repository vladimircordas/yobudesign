import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { GalleriesComponent } from './galleries/galleries.component';

import { GalleryComponent } from './gallery/gallery.component';
import { Gallery2dComponent } from './gallery2d/gallery2d.component';
import { GallerylogosComponent } from './gallerylogos/gallerylogos.component';
import { GallerybusinesscComponent } from './gallerybusinessc/gallerybusinessc.component';
import { GallerypatternsComponent } from './gallerypatterns/gallerypatterns.component';
import { GallerybookiluComponent } from './gallerybookilu/gallerybookilu.component';
import { GalleryillustrationsComponent } from './galleryillustrations/galleryillustrations.component';
import { GallerydigitalpComponent } from './gallerydigitalp/gallerydigitalp.component';
import { Gallery3dmodComponent } from './gallery3dmod/gallery3dmod.component';
import { GallerysculpturesComponent } from './gallerysculptures/gallerysculptures.component';

import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
    data: { page: 'home' } 
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { page: 'about' } 
  },
  {
    path: 'whyus',
    component: WhyUsComponent,
    data: { page: 'whyus' } 
  },
  {
    path: 'galleries',
    component: GalleriesComponent,
    data: { page: 'galleries' },
    children: [
      {path: '', redirectTo: 'logos', pathMatch: 'full'},
      {path: 'logos', component: GallerylogosComponent},
      {path: '2dart', component: Gallery2dComponent},
      {path: 'businesscards', component: GallerybusinesscComponent},
      {path: 'patterns', component: GallerypatternsComponent},
      {path: 'bookillustrations', component: GallerybookiluComponent},
      {path: 'illustrations', component: GalleryillustrationsComponent},
      {path: 'digitalpaintings', component: GallerydigitalpComponent},
      {path: '3dmodeling', component: Gallery3dmodComponent},
      {path: 'sculptures', component: GallerysculpturesComponent},
    ]
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { page: 'contact' } 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
