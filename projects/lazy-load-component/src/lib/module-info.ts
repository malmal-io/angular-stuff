import {ResolveComponent} from './resolve-component';

export interface ModuleInfo {
  loadComponent: () => Promise<ResolveComponent | any>;
  id: string;
}
