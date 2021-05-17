import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { GalleryModule } from '@ngx-gallery/core';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LightboxModule } from 'ngx-lightbox';
import { ArtistComponent } from './components/artist/artist.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { TattoosComponent } from './components/tattoos/tattoos.component';

const routes: Routes = [
  {
    path: 'tattoos',
    component: TattoosComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'artist',
    component: ArtistComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
