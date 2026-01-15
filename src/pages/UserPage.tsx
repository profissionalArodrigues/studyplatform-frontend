import { useState } from "react";
import "../styles/UserPage.css";
import { type User } from "../interface/User.tsx";
import UserList from "../components/UserList.tsx";
import UserEdit from "../components/UserEdit.tsx";

function UserPage() {
  const [mode, setMode] = useState<"list" | "edit">("list");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [reload, setReload] = useState(false);

  function editUser(user: User) {
    setSelectedUser(user);
    setMode("edit");
  }

  function backToList() {
    setSelectedUser(null);
    setMode("list");
  }

  function onSaveSuccess() {
    //Força recarregar a lista
    setReload((prev) => !prev);
    backToList();
  }

  return (
    <div className="container">
      {mode === "list" && <UserList onEdit={editUser} reload={reload} />}
      {mode === "edit" && selectedUser && (
        <UserEdit
          user={selectedUser}
          goBack={backToList}
          onSaveSuccess={onSaveSuccess}
        />
      )}

      <button className="button">Novo</button>
    </div>
  );
}

export default UserPage;
