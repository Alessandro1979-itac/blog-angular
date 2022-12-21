import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ContentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PagesModule { }
