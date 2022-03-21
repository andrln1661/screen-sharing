import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

interface Props {
  buttons: { onClick: () => void; title: string }[];
}

function ButtonsBlock({ buttons: buttons }: Props) {
  return (
    <Container>
      {buttons.map((button) => {
        <CustomButton onClick={button.onClick}>{button.title}</CustomButton>;
      })}
    </Container>
  );
}

export default ButtonsBlock;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
