class User {
    constructor(name, lastname, games, sport) {
        this.name = name;
        this.lastname = lastname;
        this.games = games;
        this.sport = sport;
    }

    getFullName() {
        return `${this.name} ${this.lastname}`;
    }

    addSport(sport) {
        this.sport.push(sport);

    }
    countSport() {
        return this.sport.length;
    }

    addGame(genre, name){
     this.games.push({genre,name});
    }

    getGameNames() {
      let GameNames = []
      GameNames.forEach(({name}) => {
        GameNames
      })
    }
}

let user = new user (
    'joaquin',
    'Gauna',
[
    {name:'League of Legends', genre:'MOBA'},
    {name:'Valorant', genre:'shooter'},
    {name:'Word of Warcraft',genre:'MMORPG'}


],
['basquet','handball','volleyball']

);

console.log('imprimir resultados');
console.log('getFullName',user.getFullName());
console.log('number of sport',user.countSport());
user.addGame('stray','adventure');
console.log('games',user.getGameNames());




