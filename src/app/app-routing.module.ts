import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BijouxComponent } from './bijoux/bijoux/bijoux.component';
import { BraceletsComponent } from './bijoux/bracelets/bracelets.component';
import { ColliersComponent } from './bijoux/colliers/colliers.component';
import { CouronnesComponent } from './accessoires/couronnes/couronnes.component';
import { AccessoiresComponent } from './accessoires/accessoires/accessoires.component';


const routes: Routes = [
  { path: 'bijoux', component: BijouxComponent },
  { path: 'bracelets', component: BraceletsComponent },
  { path: 'colliers', component: ColliersComponent },
  { path: 'couronnes', component: CouronnesComponent },
  { path: 'accessoires', component: AccessoiresComponent }
];

@NgModule({
  imports: [
RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
