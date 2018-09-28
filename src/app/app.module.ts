import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { ChartModule } from 'angular2-highcharts';
import { TemperaturaPage } from '../pages/temperatura/temperatura';
import { DweetServiceProvider } from '../providers/dweet-service'
import { HttpModule } from '@angular/http'
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { LuminosidadePage } from '../pages/luminosidade/luminosidade';

declare var require: any;
export function highchartsFactory() {
  const hc = require('highcharts');
  const hm = require('highcharts/highcharts-more');
  const mr = require('highcharts/modules/solid-gauge');
  mr(hc);
  hm(hc);
  return hc;
  }

@NgModule({
  declarations: [
    MyApp,
    Home,
    TemperaturaPage,
    LuminosidadePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule,
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    TemperaturaPage,
    LuminosidadePage
  ],
  providers: [
    HighchartsStatic,
    StatusBar,
    SplashScreen,
    DweetServiceProvider,
    {
      provide: HighchartsStatic,               //-----> and this too
      useFactory: highchartsFactory
    }
  ]
})
export class AppModule {}
