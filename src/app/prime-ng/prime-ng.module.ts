import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeNG
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset'
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    CardModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNGModule { }
