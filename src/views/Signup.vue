<template>
  <div class="container">
    <h1>Sign up</h1>
    <form>
      <div id="name">
        <label>User Name</label>
        <input type="text" v-model.lazy="user.name" required>
      </div>
      <div id="email">
        <label>Email</label>
        <input type="text" class="email" v-model.lazy="user.email" required>
      </div>
      <div id="password">
        <label>Password</label>
        <input type="password" class="password" v-model.lazy="user.password" required>
      </div>
      <div id="checkpassword">
        <label>Check Password</label>
        <input type="password" v-model.lazy="checkPassword" required>
      </div>
      <button @click="addUser"><a>Sign up</a></button>
      <div class="signin-link">
        <router-link to="/Signin">Sign in ➜</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Signup",
    data() {
      return {
        user: {
          name: '',
          email: '',
          checkEmail: '',
          password: ''
        },
        checkPassword: ''
      }
    },
    methods: {
      addUser() {
        const { name, email, password } = this.user
        if (name !== '' && email !== '' && password !== '') {
          if (password !== this.checkPassword) {
            alert('您的密碼不相同，請重新輸入')
          } else {
            this.user.checkEmail = email
            this.$store.dispatch('addUser', this.user)
            if (this.user.checkEmail !== email) {
              alert('註冊完成，請重新登入')
              this.$router.replace('/')
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    border-radius: 10px;
    width: 50%;
    height: 450px;
    margin: 100px auto;
    backdrop-filter: blur(5px);
    padding: 10px;
  }

  h1 {
    color: #fff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: auto;
  }

  #name,
  #email,
  #password,
  #checkpassword {
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  label {
    color: #2c3e50;
  }

  input {
    width: 100%;
    margin: 2px auto 10px auto;
    height: 20px;
    border-radius: 5px;
    border: 1px solid;
  }

  button {
    width: 40%;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin: 20px 0;
    padding: 10px;
  }

  button:active {
      transform: scale(0.95);
  }

  button:hover {
    background-color: steelblue;
    color: #fff;
  }

  .signin-link a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }
</style>