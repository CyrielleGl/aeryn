import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColliersComponent } from './colliers/colliers.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { BijouxComponent } from './bijoux/bijoux.component';
import { RouterModule, Router } from '@angular/router';


@NgModule({
  declarations: [ColliersComponent, BraceletsComponent, BijouxComponent],
  exports: [
    ColliersComponent,
    BraceletsComponent,
    BijouxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BijouxModule { }
