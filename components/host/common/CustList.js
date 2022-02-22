import { CustBoxStyle, ParentCustBoxStyle, ParentCustButtonsStyle, SeatButtonStyle, HoldButtonStyle, CancelButtonStyle, RqThumbStyle, SeqNumStyle, Edit, ChairsStyle, IamgeAvatarStyle, TextDetailSmallStyle, StatusInfoStyle, HeadInfoStyle, SvgStyle, TileInfoStyle, PriceThumbStyle, ExpandDtl, ExpandCustHold ,ParentExpandDtl,AnotherParentExpandDtl,AnotherExpandDtl,ParentForBoth} from '../styled/common.styled';
import { useState } from "react";
import { FlexH, FlexHspace } from '../styled/global.styled';
import {IoMdTime,IoMdCheckmarkCircleOutline} from 'react-icons/io';  
import {FiPhoneCall , FiEdit} from 'react-icons/fi';  
import {MdOutlineNotificationsActive} from 'react-icons/md';  
import {FaRegPaperPlane} from 'react-icons/fa';  
import {GoLocation} from 'react-icons/go';   
import {BsChatRightText} from 'react-icons/bs';   

 

const CustList = () => {
    const [edit, setEdit] = useState(false);
    const [expand, setExpand] = useState(false);

    const handleEdit = (e) => {
        e.preventDefault();
        setEdit(edit === true ? false : true);
        // console.log(edit);

    }
    const handleExpand = () => {

        setExpand(expand === true ? false : true);
        // console.log(expand);

    }
    return (
        <>
            <ParentCustBoxStyle className={edit === true ? "edit" : ""} >
                <CustBoxStyle onClick={handleExpand}>
                    <RqThumbStyle>REQUEUE</RqThumbStyle>
                    <PriceThumbStyle>30 KWD</PriceThumbStyle>
                    <SeqNumStyle># 1</SeqNumStyle>
                    <FlexHspace>
                        <FlexHspace className="justify-center">
                            <IamgeAvatarStyle src="../img/avatar.png" />
                            <TextDetailSmallStyle>
                                <h1>OMAR ALQATTAN</h1>
                                <a href="tel://+96590077889">+96590077889</a>
                            </TextDetailSmallStyle>
                        </FlexHspace>
                        <ChairsStyle>
                            <div className="cont">
                                <h2>2</h2>
                                <span>Chairs</span>
                                <Edit onClick={(e)=>handleEdit(e)}>Edit</Edit>
                            </div> 
                        </ChairsStyle>
                    </FlexHspace>  
                    <StatusInfoStyle>
                        <HeadInfoStyle>Guest Status info</HeadInfoStyle> 
                        <div>
                            <TileInfoStyle>
                                <IoMdTime/> 
                                <p>120 / 45 Min</p>
                            </TileInfoStyle>
                            <TileInfoStyle>
                                <GoLocation/> 
                                <p>100 M / 5 Min</p>
                            </TileInfoStyle>
                            <TileInfoStyle>
                                <IoMdCheckmarkCircleOutline className="check_color"/> 
                                <p>Checked in / 2 min</p>
                            </TileInfoStyle> 
                        </div> 
                    </StatusInfoStyle> 

                    {expand === true ? 
                    <ExpandCustHold>
                        <div>
                            <ParentForBoth>
                                <ParentExpandDtl>
                                    <ExpandDtl>  
                                        <span>
                                            <FiPhoneCall/>
                                        </span> 
                                        <p>Answer</p>
                                    </ExpandDtl>
                                    <ExpandDtl>  
                                        <span className="clrd">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                            <g id="Group_747" data-name="Group 747" transform="translate(5 1)">
                                            <path id="Icon_feather-phone-call" data-name="Icon feather-phone-call" d="M17.183,13.2v2.272c0,.41.3.48,0,.757a2.973,2.973,0,0,1-1.515.757,13.588,13.588,0,0,1-6.059-2.272A15.36,15.36,0,0,1,5.065,10.17,13.479,13.479,0,0,1,2.793,4.111,2.991,2.991,0,0,1,3.55,2.6c.275-.3.349,0,.757,0H6.58c.73-.007,1.413.034,1.515.757a12.1,12.1,0,0,0,.757,2.272c.2.532-.358,1.111-.757,1.515L7.337,7.9a12.6,12.6,0,0,0,4.544,4.544l.757-.757c.4-.4.983-.2,1.515,0,.66.246,1.574-.092,2.272,0C17.157,11.788,17.2,12.461,17.183,13.2Z" transform="translate(-0.576 3.796)" fill="none"   strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                            <g id="Ellipse_42" data-name="Ellipse 42" transform="translate(-5 -1)" fill="none"   strokeWidth="2">
                                              <circle cx="14.5" cy="14.5" r="14.5" stroke="none"/>
                                              <circle cx="14.5" cy="14.5" r="13.5" fill="none"/>
                                            </g>
                                            <line id="Line_97" data-name="Line 97" x1="18.499" y2="19.448" transform="translate(0.23 3.798)" fill="none"   strokeLinecap="square" strokeWidth="2"/>
                                            </g>
                                        </svg> 
                                        </span> 
                                        <p>Not answered <span>00:10</span></p>
                                    </ExpandDtl>
                                    <ExpandDtl>  
                                        <span>
                                            <FaRegPaperPlane/>
                                        </span> 
                                        <p>Message </p>
                                    </ExpandDtl>
                                    <ExpandDtl>  
                                        <span>
                                            <MdOutlineNotificationsActive/>
                                        </span> 
                                        <p>Ready</p>
                                    </ExpandDtl>
                                </ParentExpandDtl>
                                
                                <AnotherParentExpandDtl>
                                    <AnotherExpandDtl>  
                                        <span>
                                            <FiEdit/>
                                        </span> 
                                        <p>Kindly provide baby chair and Please want nice quote table</p>
                                    </AnotherExpandDtl> 
                                    <AnotherExpandDtl>  
                                        <span>
                                            <FiEdit/>
                                        </span> 
                                        <p>Family </p>
                                        <p>Balcony </p>
                                    </AnotherExpandDtl> 
                                    <AnotherExpandDtl>  
                                        <span>
                                            <BsChatRightText/>
                                        </span> 
                                        <p>I will be late 15 min </p>
                                    </AnotherExpandDtl>  
                                </AnotherParentExpandDtl> 
                            </ParentForBoth>
                        </div>
                    </ExpandCustHold>
                     : ""}
                    
                </CustBoxStyle>
                <ParentCustButtonsStyle onClick={(e)=>handleEdit(e)}>
                    {edit?     
                    <>
                    <SeatButtonStyle onClick={()=>alert("seat")}>Seat</SeatButtonStyle>
                    <HoldButtonStyle onClick={()=>alert("hold")}>Hold</HoldButtonStyle>
                    <CancelButtonStyle onClick={()=>alert("cancel")}>Cancel</CancelButtonStyle>
                    </>
                    :
                    <>
                    <SeatButtonStyle>Seat</SeatButtonStyle>
                    <HoldButtonStyle>Hold</HoldButtonStyle>
                    <CancelButtonStyle>Cancel</CancelButtonStyle>
                    </>
                }
                   
                </ParentCustButtonsStyle>
            </ParentCustBoxStyle>
        </>
    )
}

export default CustList
