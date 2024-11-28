import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoeyPageRoutingModule } from './histoey-routing.module';

import { HistoeyPage } from './histoey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoeyPageRoutingModule
  ],
  declarations: [HistoeyPage]
})
export class HistoeyPageModule {}
