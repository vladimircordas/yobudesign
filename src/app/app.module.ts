import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ContactComponent } from './contact/contact.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery2dComponent } from './gallery2d/gallery2d.component';

import { NgStickyModule } from 'ng-sticky';
import { NgxGalleryModule } from 'ngx-gallery';
import { GallerylogosComponent } from './gallerylogos/gallerylogos.component';
import { GallerybusinesscComponent } from './gallerybusinessc/gallerybusinessc.component';
import { GallerypatternsComponent } from './gallerypatterns/gallerypatterns.component';
import { GallerybookiluComponent } from './gallerybookilu/gallerybookilu.component';
import { GalleryillustrationsComponent } from './galleryillustrations/galleryillustrations.component';
import { Gallery3dmodComponent } from './gallery3dmod/gallery3dmod.component';
import { GallerydigitalpComponent } from './gallerydigitalp/gallerydigitalp.component';
import { GallerysculpturesComponent } from './gallerysculptures/gallerysculptures.component';
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

import { trigger, style, transition, animate, group } from '@angular/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WhyUsComponent,
    ContactComponent,
    GalleryComponent,
    Gallery2dComponent,
    GalleriesComponent,
    GallerylogosComponent,
    GallerybusinesscComponent,
    GallerypatternsComponent,
    GallerybookiluComponent,
    GalleryillustrationsComponent,
    Gallery3dmodComponent,
    GallerydigitalpComponent,
    GallerysculpturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgStickyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}