import NavComp from './NavComp';
import CustList from './CustList';
import { useState, useEffect, useContext } from 'react';
import Filter from './Filter';
import { Empty } from '../styled/common.styled';
import { GlobalContext } from '../../../contextApi/Provider';
import { useRouter } from 'next/router';


const Inside = ({ TopTitle, w100,pathInsideOutside }) => {
    const router = useRouter();
    const {insidequeue,statistics} = useContext(GlobalContext);   

    const [inside, setInside] = useState([]) 
    const [insidequeuestate, setInsidequeuestate] = useState([])
    useEffect(() => {
      return () => {
        setInside(insidequeue[0])
        setInsidequeuestate(statistics[0])
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
        router.push('home')
    }
    
    const ins = inside.map((i,index) => <CustList key={index} hasApp={i.client.hasApp} queueNumber={i.queueNumber} photo={i.client.photo} name={i.client.name} phone={i.client.phone} gestNumber={i.gestNumber} queueTime={i.queueTime} distanceTime={i.distanceTime} ></CustList>)
 
    return (
        <>
        <NavComp home={handleHome} count={insidequeuestate.length > 0?insidequeuestate.queue.inside:null} title={TopTitle} handleToggle={handleToggle} pathinsideoutside="inside"></NavComp>
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

export default Inside
