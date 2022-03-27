
import Layout from '../../components/host/Layout';
import Ofline from '../../components/host/common/Offline';
import { useState, useEffect } from 'react';
import Message from '../../components/host/common/Message';
import Modal from '../../components/host/common/Modal';
import Outside from '../../components/host/common/Outside';
// import Outside from '../../components/host/common/Outside';
import { Home2Parent, HomeSingle, QueueMain } from '../../components/host/styled/common.styled';
import useLocalStorage from "../../helpers/useLocalStorage";
 

const index = () => { 
  const [grd, setGrd] = useLocalStorage("gridView");
  const [msg, setMsg] = useState(false);
  const [lst, setLst] = useState(grd);
  const [icn, setIcn] = useState(); 
  const [listViewCls, setListViewCls] = useState(); 
  const [gridViewCls, setGridViewCls] = useState(); 
  // const [showModal, setShowModal] = useState(false);
 
  const [srlst, setSrlst] = useState();
  useEffect(() => { 
    setIcn(msg === true ? "active" : "");
    // setLst(localStorage.getItem('gridView')? false : localStorage.getItem('gridView'));
    setListViewCls(lst === true ? "active" : "");
    setGridViewCls(lst === true ? "" : "active");
    setSrlst(lst === true ? "list" : "grid"); 
  });
  useEffect(() => {
    localStorage.setItem("gridView", lst); 
  }, [lst]);
  const handlecls = (e) => {
    setMsg(msg === true ? false : true); 
  }

  const [selection, setSelection] = useState({ name: "Select All" });
  const handleSelectselections = (e) => {
    setSelection(e);
  }
  const selections = [{ name: "Select All" }, { name: "Inside" }, { name: "Outside" }, { name: "Multiple Select" }];

  return (
    <>
    <QueueMain>
      <Layout
        pagename="Queue"
        msg={() => { setMsg(msg === true ? false : true); console.log(msg);}}  
        listView={() => { setLst(lst === true ? false : true); localStorage.setItem("gridView", lst === true ? false : true);  }}   
        listViewCls={listViewCls}   
        gridViewCls={gridViewCls}   
        clas={icn}
        body={
          <div className="body">
            <Ofline styled="true"></Ofline>
            {msg === true ? <Message list={selections} value={selection.name} handleSelect={handleSelectselections} handleclose={handlecls} /> : ""}
              
            <Home2Parent className={srlst}>
              <HomeSingle className="w-100 wwfilter">
                <Outside TopTitle="Outside" w100={true}/>
              </HomeSingle>
               
            </Home2Parent>






            {/* <div>
              <button onClick={() => setShowModal(true)}>Open Modal</button>
              <Modal onClose={() => setShowModal(false)}
                show={showModal} >
                Hello from the modal!
              </Modal>
            </div> */}
          </div>
        }
      />
      </QueueMain>
    </>
  )
}

export default index
