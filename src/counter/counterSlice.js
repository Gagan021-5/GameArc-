import { createSlice ,nanoid} from '@reduxjs/toolkit'


const initialState = { 
  todos:[{id:1,text:"Bismillah!"}]
}

export const Slice = createSlice({
  name:'game',
  initialState,
  reducers:{

  }
})


export default counterSlice.reducer