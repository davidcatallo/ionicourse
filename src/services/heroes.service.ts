import { Hero } from "../models/Hero";

export class HeroesService {
    heroesList: Hero[] = [
        {
            name: "Superman",
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
            ],
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
    ];
}