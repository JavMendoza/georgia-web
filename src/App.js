import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NewOrder from "./pages/NewOrder";
import EditOrder from "./pages/EditOrder";
import PageNotFound from "./pages/PageNotFound";
import Orders from "./pages/Orders";
import NewRepartidor from "./pages/NewRepartidor";
import Users from "./pages/Users";

import { useAuth } from "./context/Auth.Context";
import { ExtinguishersProvider } from './context/Extinguishers.Context';

function AuthRoute(props) {
  const { authState } = useAuth();
  return authState.user ? props.children : <Navigate to="/login" />;
}

/* function AuthDiv(props) {
  const { user } = useAuth();
  return user ? props.children : null;
} */

function App(props) {
  const { authState, setUser } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (authState.user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [authState]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div className="App">
      <ExtinguishersProvider>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/perfil"
            element={
              <AuthRoute>
                <Profile />
              </AuthRoute>
            }
          />
          <Route
            path="/pedidos"
            element={
              <AuthRoute>
                <Orders />
              </AuthRoute>
            }
          />
          <Route
            path="/usuarios"
            element={
              <AuthRoute>
                <Users />
              </AuthRoute>
            }
          />
          <Route
            path="/nuevo-pedido/:extinguisherId"
            element={
              <AuthRoute>
                <NewOrder />
              </AuthRoute>
            }
          />
          <Route
            path="/edit-order/:orderId"
            element={
              <AuthRoute>
                <EditOrder />
              </AuthRoute>
            }
          />
          <Route
            path="/nuevo-repartidor/"
            element={
              <AuthRoute>
                <NewRepartidor />
              </AuthRoute>
            }
          />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </ExtinguishersProvider>
    </div>
  );
}

export default App;
