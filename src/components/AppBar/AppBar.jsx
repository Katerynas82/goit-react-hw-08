import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.activeLink);
  };

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.wrapper}>
      <div>Auth</div>
      {isLoggedIn && <div>Welcome, {user.name}</div>}
      <div className={styles.wrapperLinks}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/login">
              Log In
            </NavLink>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={() => dispatch(logout())}
            className={styles.button}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};
export default AppBar;
