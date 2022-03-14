
import Link from 'next/link'
import TableFilter from '../../../components/host/common/TableFilter'
import { BodyTable, FlexTableHeaderCloseParent, SideBarParentTable,TableHeaderParent, TablePage } from '../../../components/host/styled/common.styled'
import { FlexHLeft } from '../../../components/host/styled/global.styled'
import { VscChromeClose } from 'react-icons/vsc';
function index() {
  return (
    <>
      <TablePage>
        <div className="container">
          <FlexHLeft className="gap">
            <SideBarParentTable>
              <TableHeaderParent>
                <FlexTableHeaderCloseParent>
                <Link href="home">
                <div className="close"><VscChromeClose /></div>
                </Link>
                <h1> Table Floor</h1>
                </FlexTableHeaderCloseParent> 
              </TableHeaderParent>
            </SideBarParentTable>
            <BodyTable>
              <TableHeaderParent>
                  <TableFilter></TableFilter>
              </TableHeaderParent>
            </BodyTable>
          </FlexHLeft>
        </div>
      </TablePage>
    </>
  )
}

export default index