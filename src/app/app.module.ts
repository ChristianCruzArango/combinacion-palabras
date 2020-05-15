import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LimpiarArraryPipe } from './limpiar-arrary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LimpiarArraryPipe
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
