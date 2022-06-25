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

      },
      {
        id: 3,
        name: 'Carlos Montoya',
        pet: {},
        email: "carlos@gmail.com",
        password: 12345678

      },


    ],

    user: null,
    email: '',
    password: '',

  },
  methods: {

    login(){
      if(this.email == '' || this.password == ''){
        alert("Ingrese los datos del formulario");
        return
      }

      this.users.forEach(element => {
        if(element.email == this.email && element.password == this.password){
          alert("Bienvenido");

          this.user = element;
          this.updateLocalStorage();

          window.location.href = "web/Index.html";

        }
        
      });

      if(this.user == null){
        alert("El email o contraseña es incorrecto");
        return
      }
    },

    updateLocalStorage(){
      localStorage.setItem('user', JSON.stringify(this.user));
  },



  },


  created() {


   

},

});

  //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
