import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #191919;
`;

const InputContainer = styled.div`
  position: absolute;
  top: -27px;
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  width: 638px;
  height: 54px;
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 530px) {
    width: 212px;
  }

  background: #262626;

  border: 1px solid #0d0d0d;
  border-radius: 8px;
  padding: 16px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #f2f2f2;
  outline: none;

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

    color: #808080;
  }

  :focus {
    border: 1px solid #5e60ce;
  }
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 90px;
  height: 52px;
  background: #1e6f9f;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;

  color: #f2f2f2;

  :hover {
    background: #4ea8de;
  }

  :active {
    transform: scale(0.95);
  }
`;

const Img = styled.img``;

// Info Content

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 736px;
  @media (max-width: 768px) {
    width: 498px;
  }
  @media (max-width: 530px) {
    width: 300px;
  }
  margin-top: 64px;
  margin-bottom: 24px;
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  @media (max-width: 530px) {
    font-size: 12px;
  }
  line-height: 17px;

  color: #4ea8de;

  span {
    background: #333333;
    border-radius: 999px;
    padding: 2px 8px;
    color: #d9d9d9;
  }
`;

const ItemContainer = styled.div``;

export {
  Container,
  InputContainer,
  Input,
  Btn,
  Img,
  InfoContainer,
  Info,
  ItemContainer,
};
