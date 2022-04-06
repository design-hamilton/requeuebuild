import React from 'react'
import { MessageStyle, TeaxtAreaStyle, PromptStyle, ULStyle, SubmitStyle, msgCloseStyle, MsgCloseStyle } from '../styled/common.styled';
import { FlexHLeft, FlexH, FlexV } from '../styled/global.styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Message = ({list,handleSelect,value,handleclose}) => {

    const _list = list.map(l=> <li className={l.name === value ? "active" : ""} key={l.name} onClick={()=>handleSelect(l)}>{l.name}</li>)

    return (
        <MessageStyle className="fadein">
            <FlexHLeft className="gap-40">
                <ULStyle className="w-35">
                    {/* <li className={props.cls}>Select All</li>
                    <li className={props.cls}>Inside</li>
                    <li className={props.cls}>Outside</li>
                    <li className={props.cls}>Multiple Select</li> */} 
                    {_list}
                </ULStyle>
                <div className="w-100">
                    <PromptStyle>Message will send to online customer only</PromptStyle>
                    <TeaxtAreaStyle placeholder="Write a message "></TeaxtAreaStyle>
                </div>
                <FlexV className="w-35 text-left mt-3">
                  <SubmitStyle>Send</SubmitStyle>
                </FlexV> 
                
                <MsgCloseStyle onClick={()=>handleclose(handleclose)}>
                    <FontAwesomeIcon icon={faTimes} />
                </MsgCloseStyle>
            </FlexHLeft>
        </MessageStyle>
    )
}

export default Message
