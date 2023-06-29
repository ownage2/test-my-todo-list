import React, { useState } from 'react'
import "./App.css"

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      content: "react를 배워봅시다."
    }
  ]);
  const [id, setId] = useState(0);
  const [content, setContent] = useState("");

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const onSubmitHandler = () => {
    const newId = id + 1;
    setId(newId);

    setTodoList([...todoList, { id: newId, content }]);
  }

  return (
    <div className="wrapper">
      <div className="header">
        <div className ="add-section">
          <input value={content} onChange={onChangeHandler}></input>
          <button onClick={onSubmitHandler}>추가하기</button>
        </div>
        <span>Todo List</span>
      </div>
      <div className="list-section">
        {
          todoList.map(function (item) {
            return (
              <div key={item.id} className="todo">
                  <span>{item.content}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App