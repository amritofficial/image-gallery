import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from "ngx-bootstrap";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ImageDetailComponent } from "./image/image-detail.component";
import { ImageService } from "./image/shared/image.service";
import { ImageFilterPipe } from "./image/shared/filter.pipe";

import { appRoutes } from "../routes";

@NgModule({
  declarations: [
    AppComponent, 
    GalleryComponent,
    NavbarComponent,
    ImageFilterPipe, 
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }