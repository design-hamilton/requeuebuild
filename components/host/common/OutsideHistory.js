import NavComp from './NavComp';
import CustList from './CustList';
import { useState, useEffect, useContext } from 'react';
import Filter from './Filter';
import { Empty } from '../styled/common.styled';
import { GlobalContext } from '../../../contextApi/Provider';
import { useRouter } from 'next/router';


const OutsideHistory = ({ TopTitle, w100 }) => {
    const router = useRouter();

    const {outsidehistory,statistics} = useContext(GlobalContext);   
    const [outside, setOutside] = useState([]) 
    const [outsideholdstate, setOutsideholdstate] = useState([])

    useEffect(() => {
      return () => {
        setOutside(outsidehistory[0])
        setOutsideholdstate(statistics[0])

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
    const out =  outside.map((i,index) => <CustList key={index}  hasApp={i.client.hasApp} queueNumber={i.queueNumber} photo={i.client.photo} name={i.client.name} phone={i.client.phone} gestNumber={i.gestNumber} queueTime={i.queueTime} distanceTime={i.distanceTime} ></CustList>)
    return (
        <>
            <NavComp home={handleHome} count={outsideholdstate.length > 0?outsideholdstate.hold.outside:null} title={TopTitle} handleToggle={handleToggle} pathinsideoutside="history/outside"></NavComp>
            {outside.length >0?
            <>
                {w100 ?

                    <>
                        {filter ? <Filter handleCloseFilter={handleCloseFilter} filterHead="" /> : ''}
                        <div>
                            {out}
                        </div>
                    </> :
                    filter ? <Filter handleCloseFilter={handleCloseFilter} filterHead="Outside filter" /> :
                        <div>
                            {out}
                        </div>
                }
            </>
            :
        <Empty>Empty Queue !</Empty>
        }
        </>
    )
}

export default OutsideHistory
