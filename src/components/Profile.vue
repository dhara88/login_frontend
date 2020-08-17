
<template>
  <div class="container">
    <nav class="navbar navbar-light bg-light" style="top:-30px">
        <span class="navbar-brand mb-0 h1">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="/login" >{{username}}</a>
            </li>   
         </ul>
        </span>
    </nav>
        <div class="card">
            <div class="card-body">
                <form v-on:submit.prevent="login">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="email" readonly/>
                    </div>
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" v-model="username"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Upload Profile"/>
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
          username:'',
          email:''
      }
  }, 
  created() {
      this.username = this.$cookie.get('username');
      this.email = this.$cookie.get('email');

  },
    

  methods: {
     
     
    } 

}
</script>
