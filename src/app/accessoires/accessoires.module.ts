import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouronnesComponent } from './couronnes/couronnes.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  declarations: [CouronnesComponent, AccessoiresComponent],
  exports: [
    CouronnesComponent,
    AccessoiresComponent
  ],
  imports: [
  CommonModule,
  RouterModule
  ]
})
export class AccessoiresModule { }
