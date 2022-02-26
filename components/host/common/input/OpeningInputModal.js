import React from 'react';
import { OpeningStyle, StyledInputModal } from '../../styled/common.styled';

export const OpeningInputModal = (props) => {
  return (
      <>
        <OpeningStyle>
            <h2>{props.head}</h2> 
            <StyledInputModal name={props.name} type="time" placeholder={props.placeholder} /> 
        </OpeningStyle>
      </>
  )
}
