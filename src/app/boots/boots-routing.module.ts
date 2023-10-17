import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootsPage } from './boots.page';

const routes: Routes = [
  {
    path: '',
    component: BootsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BootsPageRoutingModule {}
