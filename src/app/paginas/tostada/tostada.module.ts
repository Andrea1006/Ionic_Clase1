import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TostadaPageRoutingModule } from './tostada-routing.module';

import { TostadaPage } from './tostada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TostadaPageRoutingModule
  ],
  declarations: [TostadaPage]
})
export class TostadaPageModule {}
