import { useContext } from "react";
import { Login } from "../../../pages/Login/login";
import { AuthContext }  from "../AuthContext/authcontext";

export  const RequireAuth = ({ children} : {children: JSX.Element}) => {
  const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />;
    }

    return children;
}