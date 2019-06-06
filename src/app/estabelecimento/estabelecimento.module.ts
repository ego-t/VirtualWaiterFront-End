import { InfoEstabelecimentoPage } from './../info-estabelecimento/info-estabelecimento.page';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstabelecimentoPage } from './estabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentoPage
  }
];

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EstabelecimentoPage, InfoEstabelecimentoPage],
  exports: [
    EstabelecimentoPage
  ],
  entryComponents: [
    EstabelecimentoPage, InfoEstabelecimentoPage
  ],
})
export class EstabelecimentoPageModule {}
