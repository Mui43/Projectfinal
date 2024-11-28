import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QeuePage } from './qeue.page';

const routes: Routes = [
  {
    path: '',
    component: QeuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QeuePageRoutingModule {}
