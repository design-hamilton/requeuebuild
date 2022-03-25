import NavComp from './NavComp';
import CustList from './CustList';
import { useState, useEffect, useContext } from 'react';
import Filter from './Filter';
import { Empty } from '../styled/common.styled';
import { GlobalContext } from '../../../contextApi/Provider';
import { useRouter } from 'next/router';


const InsideHistory = ({ TopTitle, w100 }) => {
    const router = useRouter();
    const {insidehistory,statistics} = useContext(GlobalContext); 
    const [insideholdstate, setInsideholdstate] = useState([])


    const [inside, setInside] = useState([]) 
    useEffect(() => {
      return () => {
        setInside(insidehistory[0])
        setInsideholdstate(statistics[0])

      }
    });
    


    const [filter, setFilter] = useState(false);

    const handleToggle = () => {
        setFilter(!filter);
    }
    const handleCloseFilter = () => {
        setFilter(!filter);
    }
    
    const handleHome = () => {
        router.push('./')
    }
    
    const ins = inside.map((i,index) => <CustList key={index} hasApp={i.client.hasApp} queueNumber={i.queueNumber} photo={i.client.photo} name={i.client.name} phone={i.client.phone} gestNumber={i.gestNumber} queueTime={i.queueTime} distanceTime={i.distanceTime} ></CustList>)
 
    return (
        <>
        <NavComp home={handleHome} count={insideholdstate.length > 0?insideholdstate.hold.inside:null} title={TopTitle} handleToggle={handleToggle} pathinsideoutside="history/inside"></NavComp>
        {inside.length > 0?
        <>
            {w100 ?

                <>
                    {filter ? <Filter handleCloseFilter={handleCloseFilter} filterHead="" /> : ''}
                    <div>
                        {/* <CustList queueNumber={inside.queueNumber} photo={inside.photo} name={inside.name} phone={inside.phone} gestNumber={inside.gestNumber} queueTime={inside.queueTime} distanceTime={inside.distanceTime} ></CustList> */}
                           {ins}
                    </div>
                </> :
                filter ? <Filter handleCloseFilter={handleCloseFilter} filterHead="Inside filter" /> :
                    <div>

                        {/* <CustList queueNumber={inside.queueNumber} photo={inside.photo} name={inside.name} phone={inside.phone} gestNumber={inside.gestNumber} queueTime={inside.queueTime} distanceTime={inside.distanceTime} ></CustList> */}
                        {ins}
                    </div>
            }
        </>:
        <Empty>Empty Queue !</Empty>
        }
    </>
    )
}

export default InsideHistory
