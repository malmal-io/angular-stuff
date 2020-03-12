import {LoadChildrenCallback} from '@angular/router';
import {ResolveComponent} from './resolve-component';
import {NgModuleFactory} from '@angular/core';

export interface ModuleInfo {
  loadComponent: () => Promise<ResolveComponent | any>;
  id: string;
}
