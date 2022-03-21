import React, { useEffect } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactChild | React.ReactChild[];
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function CustomButton({
  children: children,
  onClick: onClick,
}: Props): JSX.Element {
  return <Button onClick={onClick}>{children}</Button>;
}

export default CustomButton;

const Button = styled.button`
  border: 1px solid white;
  width: 300px;
  height: 100px;
  background: black;

  &:hover {
    background: white;
    color: black;
  }
`;
