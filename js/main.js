var app = new Vue({
  el: "#app",
  data: {

    users:[
      {
        id: 1,
        name: 'Stiven Cardona',
        pets: [],
        email: "Stiven@gmail.com",
        password: 12345678

      },
      {
        id: 2,
        name: 'Majo Gaviria',
        pets: [],
        email: "Majo@gmail.com",
        password: 12345678

      }


    ],

    user: null,
    email: '',
    password: '',

  },
  methods: {

    login(){
      if(this.email == '' || this.password == ''){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingresa correctamente los datos del formulario',
         
        });
        return
      }

      this.users.forEach(element => {
        if(element.email == this.email && element.password == this.password){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Has iniciado sesión correctamente'
          })


          this.user = element;
          this.updateLocalStorage();

          
        

        }
        
      });

      if(this.user == null){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El email y/o contraseña son incorrectos',
         
        });
        return
      }
      else{
        setTimeout(function(){     
          window.location.href = "web/Index.html";
    
        
      }.bind(this), 3500);

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
