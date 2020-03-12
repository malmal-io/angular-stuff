import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazyExampleComponent} from './lazy-example/lazy-example.component';


const routes: Routes = [{
  path: 'lazy',
  component: LazyExampleComponent
}, {
  path: '',
  redirectTo: 'lazy',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
