
import { useState, useEffect } from 'react'; 
const Select = ({ options, setSelecetedValue }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].name);
  const handleSelection = (e) => {
    setSelecetedValue(e.target.value);
    setSelectedOption(e.target.value);
  }
  return (
    <>
      <div className="ggnsettingsSelect">
        <select
          value={selectedOption}
          onChange={e => handleSelection(e)}>
          {options.map(o => (
            <option key={o.name} value={o.name}>{o.name}</option>
          ))}
        </select>
      </div>
    </>
  );
};

 
export default Select
