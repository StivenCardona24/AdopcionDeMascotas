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
          condition: 0
  
  
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
          condition: 0
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
          condition: 0
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
          condition: 0
        },
  
  
  
  
      ],
  
      newPets : [],
  
      user: null,
     
  
    },
    methods: {
  
     
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

        
        alert("No has iniciado sesión")
    }

      
     
  
  },
  
  });
  
    //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
  