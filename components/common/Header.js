import { HeaderStyle, ProfileHead, SearchNumberStyle, HeadIconStyle, PageNameStyle, SideContHoldStyle } from '../styled/common.styled';
import { FlexHLeft, FlexV } from '../styled/global.styled';
import ThemeChanger from '../../../components/host/common/ThemeChanger'; 
import {FaRegUserCircle , FaPaperPlane} from 'react-icons/fa';
import {RiListCheck,RiLayoutGridFill} from 'react-icons/ri'; 
import { useState, useEffect } from 'react';
import PhoneNumber from './input/PhoneNumber'; 
import Link from 'next/link';
import { useRouter } from 'next/router';
import useLocalStorage from '../../../helpers/useLocalStorage';
import { SaveLocalStorage } from '../../../helpers/localStorage';

const Headers = (props) => {
// export default function Headers(props) {
    const router = useRouter();
const handleSetLastPage = () => {  
SaveLocalStorage('lastPage', router.asPath);
}
    return (
        <>
            <HeaderStyle>
                <div className="container">
                    <FlexHLeft className="gap">
                        <Link href={`?profile=profile`}  >
                            <ProfileHead onClick={handleSetLastPage}>
                                <FaRegUserCircle  /> <span>Profile</span> 
                            </ProfileHead>
                        </Link>
                        <SearchNumberStyle>
                            <PhoneNumber/>
                        </SearchNumberStyle>

                        <PageNameStyle>{props.pagename}</PageNameStyle>

                        <SideContHoldStyle>

                            {/* <HeadIconStyle> 
                                <img src="../../img/msg.svg"/>
                            </HeadIconStyle> */}

                            <HeadIconStyle onClick={props.msg} className={props.clas}>
                                <FaPaperPlane/>
                            </HeadIconStyle>

                            <HeadIconStyle onClick={props.listView} className={props.listViewCls}>
                                <RiListCheck />
                            </HeadIconStyle>

                            <HeadIconStyle onClick={props.listView} className={props.gridViewCls}>
                                <RiLayoutGridFill />
                            </HeadIconStyle>
                        </SideContHoldStyle>
                        

                    </FlexHLeft>
                </div>
            </HeaderStyle>
        </>
    )
}

export default Headers;