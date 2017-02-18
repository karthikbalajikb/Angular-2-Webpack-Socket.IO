import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './styles/style.css';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}
 enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
