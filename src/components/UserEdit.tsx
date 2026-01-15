import { useState } from "react";
import { type User } from "../interface/User.tsx";
import { updateUser } from "../services/UserService.tsx";

type UserEditProps = {
  user: User;
  onSaveSuccess: () => void;
  goBack: () => void;
};

function UserEdit({ user, onSaveSuccess, goBack }: UserEditProps) {
  const [formData, setFormData] = useState<User>(user);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser(formData);

      onSaveSuccess();
    } catch (error) {
      alert("Erro ao salvar usuário");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Usuário</h1>
      <div>
        <p>Nome:</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <p>Cpf:</p>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <p>Email:</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </button>
      <button type="button" onClick={goBack}>
        Cancelar
      </button>
    </form>
  );
}

export default UserEdit;
