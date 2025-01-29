import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditlistmenuPage } from './editlistmenu.page';

const routes: Routes = [
  {
    path: '',
    component: EditlistmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditlistmenuPageRoutingModule {}
