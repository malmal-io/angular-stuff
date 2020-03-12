import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
import {ResolveComponent} from '../../../../../lazy-load-component/src/lib/resolve-component';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule
  ]
})
export class LazyModule implements ResolveComponent {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public resolveComponent() {
    return LazyComponent;
  }
}
