import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoldComponent } from './gold/gold.component';
import { SilverComponent } from './silver/silver.component';
import { CopperComponent } from './copper/copper.component';
import { EuroComponent } from './euro/euro.component';
import { DolarComponent } from './dolar/dolar.component';
import { YenComponent } from './yen/yen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gold', component: GoldComponent },
  { path: 'silver', component: SilverComponent },
  { path: 'copper', component: CopperComponent },
  { path: 'euro', component: EuroComponent },
  { path: 'dolar', component: DolarComponent },
  { path: 'yen', component: YenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
