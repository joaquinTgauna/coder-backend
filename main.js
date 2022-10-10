class Usuario {
    constructor(name, lastname, games, sport) {
        this.name = name;
        this.lastname = lastname;
        this.games = games;
        this.sport = sport;
    }
    
    getFullName(){
        return `${this.name} ${this.lastname}`;
    }
    
    addSport(sport){
    this.sport.push(sport);
    
    }
    countSport(){
        return this.sport.length;
    }
    
    addGame(genre,name)

    
}    








