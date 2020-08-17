
<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Login</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="login">
                    <div class="form-group">
                        <label>Username*</label>
                        <input type="text" class="form-control" v-model="item.username" required/>
                    </div>
                    <div class="form-group">
                        <label>Email*</label>
                        <input type="text" class="form-control" v-model="item.email" required/>
                        <!-- <span v-if="msg.email">{{msg.email}}</span> -->

                    </div>
                    <div class="form-group">
                        <label>Password*</label>
                        <input type="password" class="form-control" v-model="item.password" required/>
                        <!-- <span v-if="msg.password">{{msg.password}}</span> -->

                    </div>
                    <label for='terms'>
                        <input id='terms' type='checkbox' v-model='terms' /> Remember Me
                    </label>                    
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Login" :disabled='isDisabled'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  components: {
  },
  data:function() { 
      return {
        item:{},
        terms: false,
        message:'',
        msg: [],
        email:''
      }
  }, 
computed: {
    isDisabled: function()
        {
            return !this.terms;
        }
  },
//   watch: {
//     email(value){
//       this.email = value;
//       this.validateEmail(value);
//     }
        // password(value){
        //     this.password = value;
        //     this.validatePassword(value);
        // }
//   },

  methods: {
      login() {
        
            let uri = 'http://localhost/vue_php_crud/login.php';
            this.axios.post(uri,this.item).then((response) => {
            var token = JSON.parse(atob(response.data.token.split('.')[1]));
            var username = token.data.username;
            var email = token.data.email;
            this.$cookie.set("username", username);
            this.$cookie.set("email", email);
            this.message = response.data.message;
            this.$router.push({name: 'Profile'});

            })
            .catch(error=>
            {
                console.log(error);
            });
        }
    } ,
//     validateEmail(value){
//       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) //eslint-disable-line
//         {
//             this.msg['email'] = '';
//         } else{
//             this.msg['email'] = 'Invalid Email Address';
//   } 
// }
//     validatePassword(value){
//       let difference = 8 - value.length;
//       if (value.length<8) {
//         this.msg['password'] = 'Must be 8 characters! ;
//       } else {
//          this.msg['password'] = '';
//       }
//     }
//   }


}
</script>
