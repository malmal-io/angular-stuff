import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LazyLoadComponentModule} from '../../../lazy-load-component/src/lib/lazy-load-component.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadComponentModule.withModule({
      id: 'test',
      loadComponent: () => import('./lazy-example/lazy/lazy.module').then(m => m.LazyModule)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
