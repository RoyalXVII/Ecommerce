// import axios from '@/axios'


const state = {
  shoppingCart: []
}
const getters = {
  shoppingCart: state => {
    if(sessionStorage.getItem('cart') !== null) {
      state.shoppingCart = JSON.parse(sessionStorage.getItem('cart'))
    }
    return state.shoppingCart
  },
  shoppingCartTotal: state => {
    let total = 0
    if(state.shoppingCart.length !== 0) {
      state.shoppingCart.forEach(item => {
        total += item.product.price * item.quantity
      })
    }
    return total
  },
  shoppingCartItemCount: state => {
    let items = 0
    if(state.shoppingCart.length !== 0) {
      state.shoppingCart.forEach(item => {
        items += item.quantity
      })
    }
    return items
  }
}
const mutations = {
  ADD_TO_CART: (state, item) => {
    let i = {
      ...item,
      quantity: Number(item.quantity)
    }
    state.shoppingCart.push(i)
    sessionStorage.setItem('cart', JSON.stringify(state.shoppingCart))
  },
  // ICREMENT_QUANTITY: (state, item) => {
  //   item.quantity += 1
  // }
  INCREMENT_QUANTITY: (state, {product, quantity}) => {
    let item = state.shoppingCart.find(i => i.product._id === product._id)
    item.quantity += Number(quantity)
    sessionStorage.setItem('cart', JSON.stringify(state.shoppingCart))

  },
  DELETE_PRODUCT_FROM_CART: (state, id) => {
    state.shoppingCart = state.shoppingCart.filter(item => item.product._id !== id)
    sessionStorage.setItem('cart', JSON.stringify(state.shoppingCart))
  },
  DECREMENT_QUANTITY: (state, item) => {
    item.quantity -= 1
    sessionStorage.setItem('cart', JSON.stringify(state.shoppingCart))
  }

}
const actions = {
  addProductToCart: ({commit}, {product, quantity}) => {
    let exists = state.shoppingCart.find(item => item.product._id === product._id)
    if(exists) {
      commit('INCREMENT_QUANTITY', {product, quantity})
      return
    }
    commit('ADD_TO_CART', {product, quantity})
  },
  deleteProductFromCart: ({commit}, id) => {
    commit('DELETE_PRODUCT_FROM_CART', id)
  },
  incrementQuantity: ({commit}, item) => {
    let i = {
      ...item,
      quantity: 1
    }
    commit('INCREMENT_QUANTITY', i)
  },
  decrementQuantity: ({commit}, item) => {
    if(item.quantity <= 1) {
      commit('DELETE_PRODUCT_FROM_CART', item.product._id)
      return
    }
    commit('DECREMENT_QUANTITY', item)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}