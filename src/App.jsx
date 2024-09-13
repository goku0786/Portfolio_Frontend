import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Navbar from "./components/Navbar";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminServices } from "./pages/Admin-Service";
import { AdminHome } from "./pages/Admin-Home";
import { AdminUpdate } from "./pages/Admin-Update";
import { Footer } from "./components/Footer";
import RemoveBackgroundService from "./pages/RemoveBackgroundService";
import QRCodeService from "./pages/QRCodeService";
// import ImageGenerator from "./pages/ImageGenerator";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route
            path="/service/remove-bg"
            element={<RemoveBackgroundService />}
          />
          {/* <Route
            path="/service/image-generator"
            element={< ImageGenerator />}
          /> */}
          <Route
            path="/service/qr-generator"
            element={< QRCodeService />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
