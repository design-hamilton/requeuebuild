import React from 'react'
import { StyledInputModal } from '../../styled/common.styled';

const Input = (props) => {
    return (
        <>
             <StyledInputModal name={props.name} placeholder={props.placeholder} value={props.value}/> 
        </>
    )
}

export default Input
