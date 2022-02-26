
function DaysModal() {
  
  const _listing = listItem.map(l=> <li className={l.name === value ? "active" : ""} key={l.name} onClick={()=>handleSelect(l)}>{l.name}</li>)
  
  return (
    <>
      <ul className="list-inline list-unstyled">

      </ul>
    </>
  )
}

export default DaysModal