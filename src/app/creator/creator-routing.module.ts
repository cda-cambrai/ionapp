import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatorPage } from './creator.page';

const routes: Routes = [
  {
    path: '',
    component: CreatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorPageRoutingModule {}
