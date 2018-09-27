import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TemperaturaPage } from './../temperatura/temperatura'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {
  }

  goToTempPage() {
    this.navCtrl.push(TemperaturaPage)
  }
}
