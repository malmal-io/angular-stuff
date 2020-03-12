import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyExampleComponent} from './lazy-example.component';
import {LazyLoadComponentModule} from '../../../../lazy-load-component/src/lib/lazy-load-component.module';


@NgModule({
  declarations: [LazyExampleComponent],
  imports: [
    CommonModule,
    LazyLoadComponentModule.withModule({
      id: 'test',
      loadComponent: () => import('./lazy/lazy.module').then(m => m.LazyModule)
    })
  ]
})
export class LazyExampleModule {
}
