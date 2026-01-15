import Backend from "./Backend";
import { type User } from "../interface/User.tsx";

export function findAllUsers() {
  return Backend.get<User[]>("/user/listUsers");
}

export function updateUser(user: User) {
  return Backend.put("/user/edit", user);
}
