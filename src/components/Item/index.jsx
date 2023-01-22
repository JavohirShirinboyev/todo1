import React from "react";
import {
  Box,
  Container,
  Icon,
  Remove,
  Wrapper,
  Text,
  WrapperBox,
} from "./style";

const Item = ({ data, dispatch }) => {
  console.log(data.completed);
  return (
    <Container>
      <WrapperBox>
        <Wrapper
          className={data.completed ? "active" : ""}
          onClick={() => dispatch({ type: "toggle", payload: { id: data.id } })}
        >
          <Icon className="check" />
        </Wrapper>
        <Text
          style={{ textDecoration: data.completed ? "line-through" : "none" }}
        >
          {data.name}
        </Text>
      </WrapperBox>
      <Box>
        <Remove
          onClick={() => dispatch({ type: "delete", payload: { id: data.id } })}
          className="remove"
        />
      </Box>
    </Container>
  );
};

export default Item;
