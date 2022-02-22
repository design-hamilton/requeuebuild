import { RadioWrapper, RadioLabel, RadioInput, Mark } from "../../styled/common.styled"; 
const Radio = ({ name, children }) => (
  <RadioWrapper>
    <RadioLabel>
      <RadioInput name={name} type="radio" />
      <Mark />
      {children}
    </RadioLabel>
  </RadioWrapper>
);

export default Radio;
