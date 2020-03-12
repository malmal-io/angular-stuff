import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {DynamicModule} from 'ng-dynamic-component';
import {ModuleInfo} from './module-info';
import {LazyLoadComponent} from './lazy-load/lazy-load.component';
import {LAZY_LOAD_COMPONENT_REGISTRY} from './constants';


@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    DynamicModule.forRoot()
  ],
  exports: [LazyLoadComponent]
})
export class LazyLoadComponentModule {

  static withModule(moduleInfo: ModuleInfo): ModuleWithProviders {
    return {
      ngModule: LazyLoadComponentModule,
      providers: [
        {
          provide: LAZY_LOAD_COMPONENT_REGISTRY,
          useValue: moduleInfo,
          multi: true
        }
      ]
    };
  }

}
