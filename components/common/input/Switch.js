import { useState, useEffect } from 'react';
const Switch = (props) => { 
    return (
        <>
             <label className="switch"><input type="checkbox"  defaultChecked={props.check} onChange={props.onChange}/> <div></div> </label>
        </>
    )
}

export default Switch
