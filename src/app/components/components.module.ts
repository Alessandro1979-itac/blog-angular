import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BigCardComponent } from './big-card/big-card.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { SmallCardComponent } from './small-card/small-card.component';



@NgModule({
  declarations: [
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
  ]
})
export class ComponentsModule { }
