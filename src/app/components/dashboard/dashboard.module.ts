import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { EnvironmentStatisticsComponent } from './environment-statistics/environment-statistics.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent,
    EnvironmentStatisticsComponent,
  ],
  bootstrap: [DashboardComponent],
})
export class DashboardModule { }
