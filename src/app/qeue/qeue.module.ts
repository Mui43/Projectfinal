import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QeuePageRoutingModule } from './qeue-routing.module';

import { QeuePage } from './qeue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QeuePageRoutingModule
  ],
  declarations: [QeuePage]
})
export class QeuePageModule {}
