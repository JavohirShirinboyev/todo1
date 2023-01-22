import React, { useState, useReducer } from "react";
import {
  Container,
  InputContainer,
  Input,
  Btn,
  Img,
  InfoContainer,
  Info,
  ItemContainer,
} from "./style";
import plus from "../../assets/icons/plus.svg";
import Item from "../Item";

const Content = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, completed: false },
        ];

      case "delete":
        return state.filter((value) => value.id !== action.payload.id);

      case "toggle":
        return state.map((value) => {
          if (value.id === action.payload.id) {
            return { ...value, completed: !value.completed };
          }
          return value;
        });

      default:
        return state;
    }
  };
  const [name, setName] = useState("");

  const [todos, dispatch] = useReducer(reducer, [
    { id: Date.now(), name: "Yangi vazifa qo'shing", completed: false },
  ]);

  const addTodo = () => {
    dispatch({ type: "add", payload: { name: name } });

    setName("");
  };

  let count = 0;

  todos.map((value) => {
    if (value.completed) count++;

    return count;
  });

  return (
    <Container>
      {/* Input Container */}
      <InputContainer>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Yangi vazifa qo'shing"
          value={name}
        />
        <Btn onClick={addTodo}>
          Add
          <Img src={plus} />
        </Btn>
      </InputContainer>

      {/* Info Items */}
      <InfoContainer>
        <Info>
          yaratilgan vazifalar
          <span>{todos.length}</span>
        </Info>
        <Info>
          bajarildi{" "}
          <span>
            {todos.length} dan {count}
          </span>
        </Info>
      </InfoContainer>

      {/* Item Container */}
      <ItemContainer>
        {todos.map((todo) => {
          return <Item data={todo} key={todo.id} dispatch={dispatch} />;
        })}
      </ItemContainer>
    </Container>
  );
};

export default Content;
