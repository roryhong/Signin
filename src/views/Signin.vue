<template>
    <div class="container">
        <div class="login-success" v-if="isLogin">
            <div>Hello! {{user.name}}</div>
            <button @click="logOut">log out</button>
        </div>
        <div v-else>
            <h1>Sign in</h1>
            <form action="">
                <div id="email">
                    <label>Email</label>
                    <input type="text" class="email" v-model.lazy="user.email" required>
                </div>
                <div id="password">
                    <label>Password</label>
                    <input type="password" class="password" v-model.lazy="user.password" required>
                </div>
                <button @click.prevent="btnClick">Sign in</button>
                <div class="signup-link">
                    <router-link to="/Signup">Sign up now!</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Signin",
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    name: ''
                },
                isLogin: false
            }
        },
        methods: {
            btnClick() {
                if (this.user.email === '' || this.user.password === '') {
                    alert('帳號或密碼請勿空白')
                }
                this.$store.dispatch('findUser', this.user)
                if (this.user.name === '') return
                this.isLogin = true
                let userInfo = {
                    isLogin: true,
                    name: this.user.name
                }
                localStorage.setItem('userLogin', JSON.stringify(userInfo))
                this.$store.state.userInfo = userInfo
            },
            logOut() {
                localStorage.removeItem('userLogin')
                this.isLogin = false
                this.user.name = ''
                this.user.email = ''
                this.user.password = ''
            }
        },
        //掛載時確認是否已經是登入狀態
        mounted() {
            let userInfo = JSON.parse(localStorage.getItem('userLogin'))
            if (userInfo === null) return

            if (userInfo.isLogin) {
                this.isLogin = true
                this.user.name = userInfo.name
            }
        }
    }
</script>

<style scoped>
    .container {
        border-radius: 10px;
        width: 50%;
        height: 350px;
        margin: 100px auto;
        backdrop-filter: blur(5px);
        padding: 10px 0;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: auto;
    }

    h1 {
        color: #fff;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    }

    input {
        width: 100%;
        margin: 2px auto 10px auto;
        height: 20px;
        border-radius: 5px;
        border: 1px solid;
    }

    #email,
    #password {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }


    label {
        color: #2c3e50;
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

    .signup-link a {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
    }

    .signup-link a:hover {
        color: steelblue;
    }

    .login-success {
        color: #fff;
        font-size: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>