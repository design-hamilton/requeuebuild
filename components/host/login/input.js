import { LoginInput, LabelIcon } from '../styled/login/login.styled';

const Input = (props) => {
    return (
        <div>
             <LabelIcon>
                {props.img}
             </LabelIcon> 
            <LoginInput type={props.type} placeholder={props.title} />
        </div>
    )
}

export default Input
