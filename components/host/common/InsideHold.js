import NavComp from "./NavComp";
import CustList from "./CustList";
import { useState, useEffect, useContext } from "react";
import Filter from "./Filter";
import { Empty } from "../styled/common.styled";
import { GlobalContext } from "../../../contextApi/Provider";
import { useRouter } from "next/router";
import { cancelClient, holdClient, seatClient } from "../../../helpers/apiCalls/apiPost";

const InsideHold = ({ TopTitle, w100 }) => {
  const router = useRouter();
  const { insidehold, authToken } = useContext(GlobalContext);

  const [inside, setInside] = useState([]);
  const token = authToken[0];

  useEffect(() => {
    return () => {
      setInside(insidehold[0]);
    };
  });

  const [filter, setFilter] = useState(false);

  const handleToggle = () => {
    setFilter(!filter);
  };
  const handleCloseFilter = () => {
    setFilter(!filter);
  };

  const handleHome = () => {
    router.push("./");
  };

  const handleseat = (e) => {
    let qtid = { qId: e, tableIds: 44 };
    seatClient(qtid, token);
  };
  const handlehold = (e) => {
    let qid = { qId: e };
    holdClient(qid, token);
  };
  const handlecancel = (e) => {
    let qid = { qId: e };
    cancelClient(qid, token);
  };

  const ins = inside.map((i, index) => (
    <CustList
      key={index}
      id={i.id}
      hasApp={i.client.hasApp}
      queueNumber={i.queueNumber}
      photo={i.client.photo}
      name={i.client.name}
      phone={i.client.phone}
      gestNumber={i.gestNumber}
      queueTime={i.queueTime}
      distanceTime={i.distanceTime}
      handleseat={(e) => handleseat(i.id)}
      handlehold={(e) => handlehold(i.id)}
      handlecancel={(e) => handlecancel(i.id)}
    ></CustList>
  ));

  return (
    <>
      <NavComp
        home={handleHome}
        count={inside.length > 0 ? inside.length : null}
        title={TopTitle}
        handleToggle={handleToggle}
        pathinsideoutside="hold/inside"
      ></NavComp>
      {inside.length > 0 ? (
        <>
          {w100 ? (
            <>
              {filter ? (
                <Filter handleCloseFilter={handleCloseFilter} filterHead="" />
              ) : (
                ""
              )}
              <div>
                {/* <CustList queueNumber={inside.queueNumber} photo={inside.photo} name={inside.name} phone={inside.phone} gestNumber={inside.gestNumber} queueTime={inside.queueTime} distanceTime={inside.distanceTime} ></CustList> */}
                {ins}
              </div>
            </>
          ) : filter ? (
            <Filter
              handleCloseFilter={handleCloseFilter}
              filterHead="Inside filter"
            />
          ) : (
            <div>
              {/* <CustList queueNumber={inside.queueNumber} photo={inside.photo} name={inside.name} phone={inside.phone} gestNumber={inside.gestNumber} queueTime={inside.queueTime} distanceTime={inside.distanceTime} ></CustList> */}
              {ins}
            </div>
          )}
        </>
      ) : (
        <Empty>Empty Queue !</Empty>
      )}
    </>
  );
};

export default InsideHold;
