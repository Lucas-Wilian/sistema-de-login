import { createContext } from "react"
import { User } from "../../../Types/User/user";

export type AuthContext  = {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
}

export const AuthContext  = createContext<AuthContext>(null!)