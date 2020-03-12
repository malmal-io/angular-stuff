import {InjectionToken} from '@angular/core';
import {ModuleInfo} from './module-info';


export const LAZY_LOAD_COMPONENT_REGISTRY =
  new InjectionToken<ModuleInfo>('LAZY_LOAD_COMPONENT_REGISTRY');
