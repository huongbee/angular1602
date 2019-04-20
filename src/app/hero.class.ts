export class Hero {
    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }
}

export const listHero = [
    new Hero('Nguyen Trai', 45),
    new Hero('Quang Trung', 34),
    new Hero('Le Loi', 46),
    new Hero('Le Lai', 65),
];
