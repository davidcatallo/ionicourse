import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleHeroPage } from './single-hero/single-hero';

@Component({
    selector: 'page-heroes',
    templateUrl: 'heroes.html'
})

export class HeroesPage {

    constructor(private navCtrl: NavController) {}
    onLoadHero(name: string) {
        this.navCtrl.push(SingleHeroPage, {heroName: name});
    }
}