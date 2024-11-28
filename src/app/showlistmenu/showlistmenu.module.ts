import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowlistmenuPageRoutingModule } from './showlistmenu-routing.module';

import { ShowlistmenuPage } from './showlistmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowlistmenuPageRoutingModule
  ],
  declarations: [ShowlistmenuPage]
})
export class ShowlistmenuPageModule {}
