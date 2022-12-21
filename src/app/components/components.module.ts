import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './big-card/big-card.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';



@NgModule({
  declarations: [
    BigCardComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
