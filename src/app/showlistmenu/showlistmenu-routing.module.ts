import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowlistmenuPage } from './showlistmenu.page';

const routes: Routes = [
  {
    path: '',
    component: ShowlistmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowlistmenuPageRoutingModule {}
