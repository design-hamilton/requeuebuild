import { FaSlidersH } from "react-icons/fa"
import { TableFilterMain } from "../styled/common.styled"
import Input from "./input/Input"

 

function TableFilter({handleToggle,}) {
  return (
    <TableFilterMain>
      <h1>
       <FaSlidersH onClick={()=>handleToggle()} />
       </h1><Input placeholder="Table number "/>
    </TableFilterMain>
  )
}

export default TableFilter