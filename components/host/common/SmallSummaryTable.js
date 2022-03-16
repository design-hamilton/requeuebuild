import React from 'react'
import { NameInSUmmarySmall, SmallSummary } from '../styled/common.styled'

export default function SmallSummaryTable({totaltablescount,busycount,availablecount,personImg,personName,inside,outside,familysingle,chairs,seatingarea}) {
  return (
    <>
    <SmallSummary> 
    {personName?
        <>
            {personImg?
            <div className="text-center mt--50px">
                <img src={personImg} className="img-circle" />
            </div>
            :''} 
            <div className="text-center">
                {personName?<NameInSUmmarySmall>{personName} </NameInSUmmarySmall>:''} 
                <div className="flxzSn">
                    {inside?<p>INSIDE {inside}</p>:''}
                    {outside?<p>OUTSIDE {outside}</p>:''}
                    {familysingle?<p>{familysingle}</p>:''} 
                    {chairs?<p>CHAIRS {chairs}</p>:''}
                    {seatingarea?<p>{seatingarea}</p>:''}                    
                </div>
            </div>
    </>:''} 

        {totaltablescount?<p className="">TOTAL TABLES <span>{totaltablescount}</span></p>:''}
        {busycount?<p className="busy">BUSY <span>{busycount}</span></p>:''}
        {availablecount?<p className="available">AVAILABLE <span>{availablecount}</span></p>:''} 
    </SmallSummary> 
    </>
  )
}
