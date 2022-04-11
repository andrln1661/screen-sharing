import React from "react";
import styled from "styled-components";

interface Props {
  children: any;
}

function Title({ children: children }: Props): JSX.Element {
  return <HeadLine>{children}</HeadLine>;
}

export default Title;

const HeadLine = styled.h1`
  font-size: 20px;
  color: white;
  width: 100%;
  text-align: center;
  padding: 5px;
`;
