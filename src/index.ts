import { User } from "./models/User";
import { UserForm } from "./views/UserForm";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({name: 'Name', age: 20})

const root = document.getElementById('root')

// if (root) {
//   const userForm = new UserForm(root, user);
//   userForm.render();
// } else {
//   throw new Error('No Root');
// }

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('No Root');
}