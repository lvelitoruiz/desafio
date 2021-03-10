import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './card/card.component';
import { GoldComponent } from './gold/gold.component';
import { SilverComponent } from './silver/silver.component';
import { CopperComponent } from './copper/copper.component';
import { EuroComponent } from './euro/euro.component';
import { DolarComponent } from './dolar/dolar.component';
import { YenComponent } from './yen/yen.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    GoldComponent,
    SilverComponent,
    CopperComponent,
    EuroComponent,
    DolarComponent,
    YenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
