<template>
    <div class="sayHello" @click="hiddenBlock()">
        <h1>您好，使用者</h1>
        <router-link to="/Signin">
            <button class="signin">Signin</button>
        </router-link>
        <router-link to="/Signup">
            <button class="signup">Signup</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'SayHello',
        methods: {
            hiddenBlock() {
                const sayHello = document.querySelector('.sayHello')
                sayHello.style.display = "none"
            }
        }
    }
</script>

<style scoped>
    .sayHello {
        border-radius: 10px;
        width: 50%;
        height: 300px;
        margin: 150px auto;
        backdrop-filter: blur(5px);
        padding: 10px;
    }

    h1 {
        margin-top: 50px;
        color: #fff;
        font-size: 50px;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    }

    button {
        background: none;
        border: 3px solid #fff;
        border-radius: 10px;
        font-size: 20px;
        margin: 30px 20px;
        padding: 10px 15px;
        color: #fff;
        cursor: pointer;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    }

    button:hover {
        background-color: #fff;
        color: steelblue;
    }

    @media (min-width: 1150px) {
        .sayHello {
            height: 350px;
        }

        h1 {
            font-size: 70px;
        }

        button {
            padding: 15px 20px;
        }
    }
</style>