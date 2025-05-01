import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Store from './pages/Store'
import About from './pages/About'
import Home from './pages/Home'
import Library from './pages/Library'
import Cart from './pages/Cart'
import Game from './aboutgames/game'
import {store} from "./redux/store.js"
import {Provider} from 'react-redux'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Login from './pages/Login.jsx'
import Privacy from './pages/privacy.jsx'
import { createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
    <Route path='' element={<Home/>}></Route>
      <Route path='/store' element={<Store/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/library' element={<Library/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/privacy' element={<Privacy/>}></Route>
      <Route path='/game/:id' element={<Game/>}></Route>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store ={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
