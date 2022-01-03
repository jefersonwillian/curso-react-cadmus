import { margin } from "@mui/system";
import { useState } from "react";
import Menu from "../../components/menu/index";
function Desafio04() {
  const [todoList, setTodosList] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    const newList = [...todoList];
    newList.push(todo);
      setTodosList(newList);
      setTodo('')
  };

  const removeTodo = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodosList(newList);
  };

  return (
    <>
      <Menu />
      <div className="customer-component__name">
        <h1>DESAFIO 04</h1>
      </div>
      <div
        style={{ marginTop: "1rem", justifyContent: "center", display: "flex" }}
      >
        <input value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button onClick={addTodo}>ADICIONAR</button>
      </div>
      <div
        style={{
          marginTop: "1rem",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {todoList.map((itemTodo, index) => (
          <div
            style={{
              margin: "1rem",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {itemTodo}
            <button
              style={{
                marginLeft: "1rem",
              }}
              onClick={() => removeTodo(index)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Desafio04;
