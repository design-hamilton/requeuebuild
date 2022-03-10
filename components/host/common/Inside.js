import NavComp from './NavComp';
import CustList from './CustList';
import { useState, useEffect } from 'react';
import Filter from './Filter';
import { Empty } from '../styled/common.styled';


const Inside = ({ TopTitle, w100 }) => {
    const [filter, setFilter] = useState(false);

    const handleToggle = () => {
        setFilter(!filter);
    }
    const handleCloseFilter = () => {
        setFilter(!filter);
    }

    return (
        <>
            <NavComp home="home" title={TopTitle} handleToggle={handleToggle}></NavComp>
            <>
                {w100 ?

                    <>
                        {filter ? <Filter handleCloseFilter={handleCloseFilter} filterHead="" /> : ''}
                        <div>
                            <CustList></CustList>
                        </div>
                    </> :
                    filter ? <Filter handleCloseFilter={handleCloseFilter} filterHead="Inside filter" /> :
                        <div>

                            <CustList></CustList>
                        </div>
                }
            </>
            {/* <Empty>
            Empty Queue !
            </Empty> */}

        </>
    )
}

export default Inside
