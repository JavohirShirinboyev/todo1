import styled from "styled-components";
import { ReactComponent as remove } from "../../assets/icons/remove.svg";
import { ReactComponent as check } from "../../assets/icons/check.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 736px;
  @media (max-width: 768px) {
    width: 498px;
  }
  @media (max-width: 530px) {
    width: 300px;
  }
  min-height: 72px;
  padding: 16px;
  background: #262626;
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin-bottom: 12px;

  .active {
    background: #5e60ce;
    border: none;
    .check path {
      fill: #fff;
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: #333333;
    .remove path {
      fill: #e25858;
    }
  }
`;

const WrapperBox = styled.div`
  display: flex;
  gap: 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #4ea8de;
  cursor: pointer;
  :hover {
    background: rgb(30, 111, 159, 0.2);
  }
`;

const Icon = styled(check)`
  path {
    fill: transparent;
  }
`;

const Text = styled.div`
  display: block;
  width: 600px;
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 530px) {
    width: 200px;
  }
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */

  /* Gray 100 */

  color: #f2f2f2;
`;

const Remove = styled(remove)``;

export { Container, Remove, Box, Wrapper, WrapperBox, Icon, Text };
