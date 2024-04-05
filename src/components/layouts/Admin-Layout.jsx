import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  console.log("admin layout", user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className="adminlayout">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/admin/home">Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
