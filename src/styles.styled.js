import styled from "styled-components";

export const ListItem = styled.li`
  margin-top: 15px;

  &:first-child {
    margin-top: 0px;
  }
`;

export const ButtonHover1 = styled.button`
  background: #1492c8;
  border-radius: 20px;

  border: none;
  outline: none;
  padding: 12px 20px;
  transition: 250ms ease;
  color: #fff;
  font-size: 32px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }
`;

export const ButtonHover2 = styled.button`
  background: transparent;
  border: 5px solid #1492c8;
  border-radius: 20px;

  outline: none;
  padding: 12px 20px;
  transition: 250ms ease;
  font-size: 32px;

  &:hover {
    cursor: pointer;
    transition: background 250ms ease;
    background: #1492c8;
    color: #fff;
  }
`;

export const ButtonHover3Container = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 743px) {
    width: 200px;
  }
`;

export const ButtonHover3 = styled.button`
  background: #1492c8;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 12px 20px;
  transition: 250ms ease;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;

export const ButtonHover3Icon = styled.svg`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 1px;
  transition: 250ms ease;

  opacity: 0;

  &:hover {
    cursor: pointer;
    transition: opacity 250ms ease;
    opacity: 1;
    fill: #fff;
    color: #fff;
  }
`;
