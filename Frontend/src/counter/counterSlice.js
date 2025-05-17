import { createSlice } from '@reduxjs/toolkit'
const cartvalue= JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cartitem: cartvalue,
  value: cartvalue.length
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {


  addtocart: (state, action) => {
      const  game = action.payload
      let addedgame = state.cartitem.find((e)=> e.id === game.id);
      if(!addedgame){
        state.cartitem.push({...game});
        state.value +=1;
      
        localStorage.setItem("cart",JSON.stringify(state.cartitem));
      }
    },
    removecartitem:(state,action)=>{
      let removegame = action.payload;
      state.cartitem = state.cartitem.filter((e)=> e.id !== removegame.id);
      state.value -=1;
      localStorage.setItem("cart", JSON.stringify(state.cartitem));
    }


  },
})


export const { addtocart,removecartitem } = cartSlice.actions

export default cartSlice.reducer;