import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditlistmenuPageRoutingModule } from './editlistmenu-routing.module';

import { EditlistmenuPage } from './editlistmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditlistmenuPageRoutingModule
  ],
  declarations: [EditlistmenuPage]
})
export class EditlistmenuPageModule {}
