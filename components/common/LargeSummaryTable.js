import React from 'react'
import { LargeSummary, NameInSUmmarySmall, SaveModl, SmallSummary } from '../styled/common.styled'

export default function LargeSummaryTable({tableno,personName,inside,outside,familysingle,chairs,seatingarea}) {
  return (
    <LargeSummary>
        <SmallSummary> 
            <h3 className="tabNo">{tableno}</h3>
            <div className="availableImg">
                <h1>Available</h1>
                {personName?<NameInSUmmarySmall>{personName} </NameInSUmmarySmall>:''} 

            </div>
            
                <>
                    <div className="text-center">     
                        <div className="flxzSn">
                        {inside?<p>INSIDE {inside}</p>:''}
                        {outside?<p>OUTSIDE {outside}</p>:''}
                        {familysingle?<p>{familysingle}</p>:''} 
                        {chairs?<p>CHAIRS {chairs}</p>:''}
                        {seatingarea?<p>{seatingarea}</p>:''}                    
                        </div>
                    </div>
                </> 
                <div className="text-center">
                    <SaveModl>Seat</SaveModl>
                </div>
        </SmallSummary> 
    </LargeSummary>
  )
}
