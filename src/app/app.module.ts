import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {ChartModule,DataTableModule,SharedModule} from 'primeng/primeng';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,ChartModule,MaterialModule.forRoot(),DataTableModule,SharedModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
