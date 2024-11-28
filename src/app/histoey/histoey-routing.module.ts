import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoeyPage } from './histoey.page';

const routes: Routes = [
  {
    path: '',
    component: HistoeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoeyPageRoutingModule {}
