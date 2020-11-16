//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    loadUser() {
       const result =  $.ajax({
            method: 'get',
            url: `https://randomuser.me/api/`,
            async: false

        });
        const response = JSON.parse(result["responseText"])
        this.data["firstName"] = response.results[0].name.first;
        this.data["lastName"] = response.results[0].name.last;
        this.data["city"] = response.results[0].location.city;
        this.data["state"] = response.results[0].location.state;
        this.data["profilePictureUrl"] = response.results[0].picture.large;
    }
    friends(){
        const result =  $.ajax({
            method: 'get',
            url: `https://randomuser.me/api/?page=3&results=7`,
            async: false
        });
        
        const response = JSON.parse(result["responseText"])
        this.data["namefriends"] = []
        for(let i=0;i<7;i++){
        this.data["namefriends"].push(response.results[i].name.first);  
    }
    }
    loadPokemon() {
        const i =  Math.floor(Math.random()*200)+1
        const result =  $.ajax({
             method: 'get',
             url: `https://pokeapi.co/api/v2/pokemon/${i}`,
             async: false
 
         });
         const response = JSON.parse(result["responseText"])
         this.data["pokemonName"] = response.name;
         this.data["picturePokemon"] = response.sprites.other.dream_world.front_default;
     }
     
    loadQoute() {
        const result =  $.ajax({
             method: 'get',
             url: `https://api.kanye.rest/`,
             async: false
 
         });
         const response = JSON.parse(result["responseText"])
         this.data["qoute"] = response.quote;
        }
     
    loadPig() {
        const result =  $.ajax({
             method: 'get',
             url: `https://baconipsum.com/api/?type=meat-and-filler`,
             async: false
 
         });
         const response = JSON.parse(result["responseText"] )
         this.data["pig"] = response[0];
     
     }

     loadData = () => {
        this.loadUser()
        this.loadPokemon()
        this.loadPig()
        this.loadQoute()
        this.friends()
        return this.data;

     }

}
