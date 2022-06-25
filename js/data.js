var app = new Vue({
    el: "#app",
    data: {
  
      users:[
        {
          id: 1,
          name: 'Stiven Cardona',
          pet: {},
          email: "Stiven@gmail.com",
          password: 12345678
  
        },
        {
          id: 2,
          name: 'Majo Gaviria',
          pet: {},
          email: "Majo@gmail.com",
          password: 12345678
  
        }
  
  
      ],
  
      pets: [
        {
          id: 1,
          name: 'Firulais',
          breed: 'Criollo',
          color: 'Café',
          kind: 'Canino',
          edad: '5 meses',
          gender: 'Macho',
          description: 'Amistoso, grande, con mucho amor',
          img: '../Images/perro.png',
          condition: 0,
          modal_id: 'p1',
          modalw: '#p1',
  
  
        },
  
        {
          id: 2,
          name: 'Peyton',
          breed: 'Labrador',
          color: 'Café',
          kind: 'Canino',
          edad: '6 meses',
          gender: 'Hembra',
          description: 'Amistoso, grande, con mucho amor',
          img: '../Images/perro2.png',
          condition: 0,
          modal_id: 'p2',
          modalw: '#p2',
        },
  
        {
          id: 3,
          name: 'Spider',
          breed: 'Criollo',
          color: 'Beige',
          kind: 'Felino',
          edad: '6 meses',
          gender: 'Macho',
          description: 'Amistoso, pequeño, con mucho amor',
          img: '../Images/gato3.png',
          condition: 0,
          modal_id: 'p3',
          modalw: '#p3',
        },
  
        {
          id: 4,
          name: 'Susi',
          breed: 'Criollo',
          color: 'Café',
          kind: 'Felino',
          edad: '4 meses',
          gender: 'Hembra',
          description: 'Amistosa, pequeño, con mucho amor',
          img: '../Images/gato.png',
          condition: 0,
          modal_id: 'p4',
          modalw: '#p4',
        },
  
  
  
  
      ],
  
      newPets : [],

      dataPets: [],
  
      user: null,
      type: 'Especie',
      option: 0,
     
  
    },
    
    methods: {
  
     
      logout(){
        this.user = null;
        localStorage.removeItem("user");
        window.location.href = "../Login.html";
      },

      loadPets(){
       
        this.dataPets = this.newPets.map(e => e);

        this.option = 1;
        
      },

      loadForm(){
        this.dataPets = [];
        this.option = 2;

      },

      searchFor() {

        if (this.type == "Especie") {
  
          this.dataPets = this.newPets;
        }
        else {
          this.dataPets = this.newPets.filter(item => item.kind == this.type);
          window.location.href = "#pets"
  
  
        }

    },



      updateLocalStorage(){
        localStorage.setItem('pets', JSON.stringify(this.newPets));
    },
  
  
    listData(){
      this.newPets = this.pets;
      this.updateLocalStorage();
    },
  
    },
  
  
    created() {
  
      if(localStorage.getItem('pets') != null){
          this.newPets = JSON.parse(localStorage.getItem('pets'))
      }
      else{
          this.listData();
      }

      if(localStorage.getItem('user') != null){
        this.user =  JSON.parse(localStorage.getItem('user'));

        let btn = document.getElementById("log");
        btn.click();

    }
    else{

        
        alert("No has iniciado sesión");

        window.location.href = "../Login.html";
    }

      
     
  
  },
  
  });
  
    //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
  