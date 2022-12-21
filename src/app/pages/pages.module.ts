import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ContentComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
