
import Link from 'next/link'
import TableFilter from '../../../components/host/common/TableFilter'
import { BodyTable, FlexTableHeaderCloseParent, SideBarParentTable,SmallSummary,TableHeaderParent, TablePage } from '../../../components/host/styled/common.styled'
import { FlexHLeft } from '../../../components/host/styled/global.styled'
import { VscChromeClose } from 'react-icons/vsc';
import SmallSummaryTable from '../../../components/host/common/SmallSummaryTable';
import LargeSummaryTable from '../../../components/host/common/LargeSummaryTable';
import TablesGrid from '../../../components/host/common/TablesGrid';
import { useEffect, useState } from 'react';
import { GetLocalStorage } from '../../../helpers/localStorage';



function index() {
  const [lastpage, setLastpage] = useState('home')
      useEffect(() => { 
          setLastpage(GetLocalStorage('lastPage')?GetLocalStorage('lastPage'):'home')
      }, []);
  return (
    <>
      <TablePage>
        <div className="container">
          <FlexHLeft className="gap">
            <SideBarParentTable>
              <TableHeaderParent>
                <FlexTableHeaderCloseParent>
                  <Link href={lastpage}>
                    <div className="close"><VscChromeClose /></div>
                  </Link>
                  <h1> Table Floor</h1>
                </FlexTableHeaderCloseParent> 
              </TableHeaderParent>
              
              <div className="pl-3 pr-3">
                <SmallSummaryTable totaltablescount="30" busycount="25" availablecount="5"/>
                {/* <SmallSummaryTable personImg="../img/Profile.png" personName="KHALED ALQattan" inside="1" familysingle="Family" chairs="4" seatingarea="Ground Floor"/> */}
              </div>

              <LargeSummaryTable tableno="301" inside="1" familysingle="Family" chairs="4" seatingarea="Ground Floor"/>

            </SideBarParentTable>
            <BodyTable>
              <TableHeaderParent>
                  <TableFilter></TableFilter>
              </TableHeaderParent>
              <TablesGrid/>
            </BodyTable>
          </FlexHLeft>
        </div>
      </TablePage>
    </>
  )
}

export default index