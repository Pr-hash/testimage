import { ImageService } from './image.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OriginalComponent } from './Component/original/original.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './Componetes/tabla/tabla.component';
import { ContactformComponent } from './contactform/contactform.component';



@NgModule({
  declarations: [
    AppComponent,
    OriginalComponent,
    TablaComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  exports: [

  ],

  bootstrap: [AppComponent],
  providers: [ImageService],

})
export class AppModule { }
