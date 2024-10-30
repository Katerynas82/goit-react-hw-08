import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Contacts from "./components/Contacts/Contacts";
import Register from "./pages/RegistrationForm";
import Login from "./pages/LoginForm";


const App=()=> {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
