import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevenueComponent } from './revenue/revenue.component';
import { OverdueComponent } from './overdue/overdue.component';
import { OvertatComponent } from './overtat/overtat.component';
import { CapacityComponent } from './capacity/capacity.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/revenue', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'revenue', component: RevenueComponent },
      { path: 'overdue', component: OverdueComponent },
      { path: 'capacity', component: CapacityComponent },
      { path: 'overtat', component: OvertatComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
