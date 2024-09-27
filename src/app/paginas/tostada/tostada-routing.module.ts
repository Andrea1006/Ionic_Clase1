import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TostadaPage } from './tostada.page';

const routes: Routes = [
  {
    path: '',
    component: TostadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TostadaPageRoutingModule {}
