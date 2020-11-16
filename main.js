class controller {
    constructor(){
        this.view = new View()
        this.model = new APIManager()
    }
    loadUser() {
        const data = this.model.loadData()
        this.view.renderer(data)
    }
}

const cont = new controller()

$(`.loadUser`).on(`click`,function(){
   cont.loadUser();
   
 
});