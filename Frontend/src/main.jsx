import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Cart from "./pages/Cart";
import Game from "./aboutgames/Game.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import { createRoutesFromElements } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Explore from "./pages/Explore.jsx";
import SearchProvider from "./context/Searchinput.jsx";
import FilterProvider from "./context/Filtercontext.jsx";
import Account from "./pages/Account.jsx";
import Gameup from "./aboutgames/gameup.jsx";
import RemindProvider from "./context/Remind.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import { AuthProvider } from "./context/Authcontext.jsx";
import Profile from "./pages/UserDashboard.jsx";
import Success from "./components/Sucess.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/userprofile" element={<Profile />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/game/gamedetail/:id" element={<Game />}></Route>
        <Route path="/upcomingame/:id" element={<Gameup />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Account />}></Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <AuthProvider>
          <FilterProvider>
            <RemindProvider>
              <RouterProvider router={router} />

              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
              />
            </RemindProvider>
          </FilterProvider>
        </AuthProvider>
      </SearchProvider>
    </Provider>
  </StrictMode>
);
