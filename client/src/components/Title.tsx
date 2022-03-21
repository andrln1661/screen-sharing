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
  font-size: 34px;
  color: white;
`;
