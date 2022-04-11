import React from "react";
import styled from "styled-components";

function ControlToggle(
  enabledElement: React.ReactNode,
  disabledElement: React.ReactNode
): Function {
  return function (props: {
    enabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
  }): JSX.Element {
    return (
      <Button onClick={props.onClick}>
        {props.enabled ? enabledElement : disabledElement}
      </Button>
    );
  };
}

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  transform: scale(0.7);
`;

export default ControlToggle;
