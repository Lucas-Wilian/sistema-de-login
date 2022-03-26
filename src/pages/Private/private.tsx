import { useContext } from "react"
import { AuthContext } from "../../context/Auth/AuthContext/authcontext"

export default function Private() {

  const auth = useContext(AuthContext)

  return (
    <div>
      <h2>
        Private
      </h2>
      <p>
        Olá {auth.user?.name}, de boa?
      </p>
    </div>
  )
}
