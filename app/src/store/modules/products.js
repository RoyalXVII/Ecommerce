import axios from '@/axios'

export default {
  state: {
    products: [],
    product: null 
  },
  getters: {
    products: state => state.products,

    product: state => state.product

  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },

    GET_PRODUCT_BYID(state, product) {
      state.product = product                                                                  
      sessionStorage.setItem('product', state.product)
    },
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('/products')
      commit('SET_PRODUCTS', res.data)
    },

    getProductById({commit}, id) {            
      axios.get('/products/' + id) 
      .then(res => { 
        if(res !== null) {
          commit('GET_PRODUCT_BYID', res.data)
        } 
      })
    },

  }
}