import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './styles/style.css';
//import 'xlsx/xlsx.js';
import { AppModule } from './app/app.module';
//declare let XLSX:any;
if (process.env.ENV === 'production') {
  enableProdMode();
}
 enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
