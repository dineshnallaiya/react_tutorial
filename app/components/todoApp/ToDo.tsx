import { ReactNode, useReducer, useState } from "react";

// action
const add_todo = "add_todo";
const delete_todo = "delete_todo";
const updata_todo = "update_todo";
// Reducer
function toDoReducer(state: any, action: any) {
  console.log("34", action);
  switch (action.type) {
    case add_todo:
      return [...state, action.data];
    case delete_todo:
      return state.filter((item: any, i: number) => i != action.id);
    case updata_todo:
      state.map((item: any, i: number) => {
        if (i == action.id) {
          console.log(item, i);
          (item.name = "qqq"), (item.age = "20");
        }
      });
      return [...state];
  }
}
const ToDo = () => {
  const [todo, dispatchTodo] = useReducer(toDoReducer, []);
  const [user, setUser] = useState({
    name: "",
    age: "",
  });
  const handleFormValue = (event: any) => {
    const { name, value } = event;
    console.log(name);
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    dispatchTodo({
      type: add_todo,
      data: { ...user },
    });
  };
  const edit = (i: number) => {
    dispatchTodo({
      type: updata_todo,
      id: i,
    });
  };
  const dle = (i: number) => {
    dispatchTodo({
      type: delete_todo,
      id: i,
    });
  };
  return (
    <>
      <h6>todo - useReducer</h6>
      <div>
        <label htmlFor="name">user name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(event) => handleFormValue(event.target)}
        />
      </div>
      <div>
        <label htmlFor="">age</label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={(event) => handleFormValue(event.target)}
        />
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>

      {todo && (
        <div>
          <table>
            <thead>
              <tr>
                <td>User</td>&nbsp;
                <td>Age</td>&nbsp;
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {todo.map((item: any, i: number) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                      <button onClick={() => edit(i)}>edit</button>
                    </td>
                    <td>
                      <button onClick={() => dle(i)}>delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default ToDo;
