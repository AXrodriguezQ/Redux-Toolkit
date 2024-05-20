import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/userSlice"

const UsersList = () => {

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res);
          dispatch(fetchUsers(res.data))
        })
        .catch((e) => {
          console.log('Ha ocurrido un error inseperado', e);
        });
    }, [dispatch])

  return (
    <>
        <h2>Lista de usuarios JSON Placeholder</h2>
        <ul>
            <li>Usuarios</li>
            {
              users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))
            }
        </ul>
    </>
  )
}

export default UsersList