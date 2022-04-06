import React from "react";
import { StyledInputModal } from "../../styled/common.styled";

const Input = (props) => {
  return (
    <>
    {props.vlu?
      <StyledInputModal
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
        disabled={true}
      />
     : <StyledInputModal
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
      />
      }
    </>
  );
};

export default Input;
