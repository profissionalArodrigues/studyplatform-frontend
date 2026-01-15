import { useEffect, useState } from "react";
import "../styles/UserPage.css";
import { type User } from "../interface/User.tsx";
import { findAllUsers } from "../services/UserService.tsx";

type UserListProps = {
  onEdit: (user: User) => void;
  reload: boolean;
};

function UserList({ onEdit, reload }: UserListProps) {
  const [listUsers, setListUsers] = useState<User[]>([]);

  //Criando uma função de forma assíncrona para conexão com o backend através do endpoint /user/listUsers
  async function getUsers() {
    const response = await findAllUsers();
    setListUsers(response.data);
  }

  //Executando a função getUsers ao carregar a página
  useEffect(() => {
    getUsers();
  }, [reload]);

  return (
    <>
      <h1>Lista de Usuários</h1>
      {listUsers.map((user) => (
        <div className="card" key={user.id}>
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Cpf: <span>{user.cpf}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button className="button" onClick={() => onEdit(user)}>
            Editar
          </button>
        </div>
      ))}
    </>
  );
}

export default UserList;
