import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BootsPageRoutingModule } from './boots-routing.module';

import { BootsPage } from './boots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BootsPageRoutingModule
  ],
  declarations: [BootsPage]
})
export class BootsPageModule {}
