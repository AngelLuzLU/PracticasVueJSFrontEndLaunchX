import { createStore } from 'vuex'

export default createStore({
  state: {
    Stock_Vainilla: 7,
    Stock_RedVelvet: 6,
    Stock_ChocolateOsc: 3,
    Stock_Moka: 2,
    Stock_Zanahoria: 9,
    Stock_TresLeches: 4,
    Stock_Fruta: 1,
    Stock_Chocolate: 5,
    Stock_Macarrones: 6,
    Stock_Fondant: 3,
    Pedidos : [],
    Pedidocount: 0
  },
  getters: {
    getVainilla(state){
      var Vainilla = state.Stock_Vainilla;
      return Vainilla;
    },
    getRedVelvet(state){
      return state.Stock_RedVelvet;
    },
    getChocolateOsc(state){
      return state.Stock_ChocolateOsc;
    },
    getMoka(state){
      return state.Stock_Moka;
    },
    getZanahoria(state){
      return state.Stock_Zanahoria;
    },
    getTresLeches(state){
      return state.Stock_TresLeches;
    },
    getFruta(state){
      return state.Stock_Fruta;
    },
    getChocolate(state){
      return state.Stock_Chocolate;
    },
    getMacarrones(state){
      return state.Stock_Macarrones;
    },
    getFondant(state){
      return state.Stock_Fondant;
    },
  },
  mutations: {
    agregarPedido(state, pedido){
      state.Pedidos.push(pedido);
    },
    increaseCount(state){
      state.Pedidocount++;
    },
    increaseVainilla(state){
      state.Stock_Vainilla++;
    },
    increaseRedVelvet(state){
      state.Stock_RedVelvet++;
    },
    increaseChocolateOsc(state){
      state.Stock_ChocolateOsc++;
    },
    increaseMoka(state){
      state.Stock_Moka++;
    },
    increaseZanahoria(state){
      state.Stock_Zanahoria++;
    },
    increaseTresLeches(state){
      state.Stock_TresLeches++;
    },
    increaseFruta(state){
      state.Stock_Fruta++;
    },
    increaseChocolate(state){
      state.Stock_Chocolate++;
    },
    increaseMacarrones(state){
      state.Stock_Macarrones++;
    },
    increaseFondant(state){
      state.Stock_Fondant++;
    },
    decreaseVainilla(state){
      state.Stock_Vainilla--;
    },
    decreaseRedVelvet(state){
      state.Stock_RedVelvet--;
    },
    decreaseChocolateOsc(state){
      state.Stock_ChocolateOsc--;
    },
    decreaseMoka(state){
      state.Stock_Moka--;
    },
    decreaseZanahoria(state){
      state.Stock_Zanahoria--;
    },
    decreaseTresLeches(state){
      state.Stock_TresLeches--;
    },
    decreaseFruta(state){
      state.Stock_Fruta--;
    },
    decreaseChocolate(state){
      state.Stock_Chocolate--;
    },
    decreaseMacarrones(state){
      state.Stock_Macarrones--;
    },
    decreaseFondant(state){
      state.Stock_Fondant--;
    },
    actualizarVainilla(state, newStock){
      state.Stock_Vainilla = newStock;
    },
    actualizarRedVelvet(state, newStock){
      state.Stock_RedVelvet = newStock;
    },
    actualizarChocolateOsc(state, newStock){
      state.Stock_ChocolateOsc = newStock;
    },
    actualizarMoka(state, newStock){
      state.Stock_Moka = newStock;
    },
    actualizarZanahoria(state, newStock){
      state.Stock_Zanahoria = newStock;
    },
    actualizarTresLeches(state, newStock){
      state.Stock_TresLeches = newStock;
    },
    actualizarFruta(state, newStock){
      state.Stock_Fruta = newStock;
    },
    actualizarChocolate(state, newStock){
      state.Stock_Chocolate = newStock;
    },
    actualizarMacarrones(state, newStock){
      state.Stock_Macarrones = newStock;
    },
    actualizarFondant(state, newStock){
      state.Stock_Fondant = newStock;
    },
  },
  actions: {
  },
  modules: {
  }
})
