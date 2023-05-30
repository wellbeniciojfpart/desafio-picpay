import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard.component';
import { TableFinance } from './components/tabela/table-finance';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableFinance,
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
