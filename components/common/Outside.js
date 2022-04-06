import NavComp from "./NavComp";
import CustList from "./CustList";
import { useState, useEffect, useContext } from "react";
import Filter from "./Filter";
import { Empty } from "../styled/common.styled";
import { GlobalContext } from "../../../contextApi/Provider";
import { useRouter } from "next/router";
import { seatClient } from "../../../helpers/apiCalls/apiPost";

const Outside = ({ TopTitle, w100 }) => {
  const router = useRouter();

  const { outsidequeue,authToken } = useContext(GlobalContext);
  const [outside, setOutside] = useState([]);
  const token = authToken[0];

  useEffect(() => {
    return () => {
      setOutside(outsidequeue[0]);
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
    seatClient(qtid,token);
  };
  const handlehold = (e) => {
    let qid = { qId: e };
    holdClient(qid, token);
  };
  const handlecancel = (e) => {
    let qid = { qId: e };
    cancelClient(qid, token);
  };

  const out = outside.map((i, index) => (
    <CustList
      key={index}
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
        count={outside.length > 0 ? outside.length : null}
        title={TopTitle}
        handleToggle={handleToggle}
        pathinsideoutside="home/outside"
      ></NavComp>
      {outside.length > 0 ? (
        <>
          {w100 ? (
            <>
              {filter ? (
                <Filter handleCloseFilter={handleCloseFilter} filterHead="" />
              ) : (
                ""
              )}
              <div>{out}</div>
            </>
          ) : filter ? (
            <Filter
              handleCloseFilter={handleCloseFilter}
              filterHead="Outside filter"
            />
          ) : (
            <div>{out}</div>
          )}
        </>
      ) : (
        <Empty>Empty Queue !</Empty>
      )}
    </>
  );
};

export default Outside;
