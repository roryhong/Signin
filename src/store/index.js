import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        name: 'Henry',
        email: 'henry123@mail.com',
        password: 'henry123'
      },
      {
        name: 'Alex',
        email: 'alex123@mail.com',
        password: 'alex123'
      },
      {
        name: 'John',
        email: 'john123@mail.com',
        password: 'john123'
      }
    ],
    userInfo: {}
  },
  mutations: {
    FINDUSER(state, value) {
      if (value.email !== '' && value.password !== '') {
        const result = state.users.find(user => {
          if (user.email === value.email && user.password === value.password) {
            return value.name = user.name
          }
        })

        if (!result) {
          value.email = ''
          value.password = ''
          alert('此帳號尚未註冊')
        }
      }
    },
    ADDUSER(state, value) {
       const result = state.users.find(user => {
        value.checkEmail = user.email
        return user.email === value.email
      })
      
      if (result) {
        alert('此帳號已被註冊')
      }else {
        state.users.push(value)
      }
    }
  },
  actions: {
    findUser(context, value) {
      context.commit('FINDUSER', value)
    },
    addUser(context, value) {
      context.commit('ADDUSER', value)
    }
  }
})