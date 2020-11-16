class View {
    constructor() {

    }
    renderer = (data) => {

        const usercontainer = $(`.user-container`)
        usercontainer.empty()
        usercontainer.append(`<p>${data.firstName}</p>`)
        usercontainer.append(`<p>${data.lastName}</p>`)
        usercontainer.append(`<p>${data.city}</p>`)
        usercontainer.append(`<p>${data.state}</p>`)
        usercontainer.append(`<img src = "${data.profilePictureUrl}" alt="">`)

        const quotecontainer = $(`.quote-container`)
        quotecontainer.empty()
        quotecontainer.append(`<p> ${data.qoute} </p>`)

        const pokemoncontainer = $(`.pokemon-container`)
        pokemoncontainer.empty()
        pokemoncontainer.append(`<img src = "${data.picturePokemon}" alt="">`)
        pokemoncontainer.append(`<p> ${data.pokemonName}</p>`)

        const meatcontainer = $(`.meat-container`)
        meatcontainer.empty()
        meatcontainer.append(`<p>${data.pig}</p>`)

        const friendscontainer = $(`.friends-container`)
        friendscontainer.empty()
    for(let i =0 ;i<7;i++){
        friendscontainer.append(`<p> ${data.namefriends[i]} </p>`)
        
    }
    }
}