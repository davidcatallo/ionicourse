import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleHeroPage } from './single-hero/single-hero';
import { Hero } from '../../models/Hero';

@Component({
    selector: 'page-heroes',
    templateUrl: 'heroes.html'
})

export class HeroesPage {
    heroesList: Hero[] = [
        {
            name:"Superman",
            description: [
                'Ne supporte pas la kryptonite',
                'Est copain avec batman de temps en temps'
            ],
            isInCombat: true
        },
        {
           name: "Felix the cat",
           description: [
               'A 7 vies',
               'Attaque avec des griffes'
           ] ,
           isInCombat: false
        },
        {
            name: "The Joker",
            description: [
                'Ennemi de Batman',
                'Meurtrier à Gotham City'
            ],
            isInCombat: false
        }
    ]
    constructor(private navCtrl: NavController) {

    }
    onLoadHero(name: string) {
        this.navCtrl.push(SingleHeroPage, {heroName: name});
    }
}
