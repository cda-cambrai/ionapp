import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatorPageRoutingModule } from './creator-routing.module';

import { CreatorPage } from './creator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatorPageRoutingModule
  ],
  declarations: [CreatorPage]
})
export class CreatorPageModule {}
