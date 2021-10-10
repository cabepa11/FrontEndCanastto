import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './promo/promo.component';
import { BasicComponent } from './basic/basic.component';
import { LimitedComponent } from './limited/limited.component';

@NgModule({
  declarations: [
    PromoComponent,
    BasicComponent,
    LimitedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PromoComponent,
    BasicComponent,
    LimitedComponent
  ]
})
export class ComponentsModule { }
