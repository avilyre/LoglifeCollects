import users from "../../mocks/users";
import { User, UserLoginParams } from "./interface";

export async function getUserLogin(user: UserLoginParams): Promise<User[]> {
  const userFiltered = users.filter(userItem => {
    return userItem.email === user.email && userItem.password === user.password;
  });

  let result = new Promise<User[]>(resolve => {
    setTimeout(() => {
      resolve(userFiltered);
    }, 2000);
  });

  return result;
}
