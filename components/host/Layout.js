import React, { useContext } from "react";
import Headers from "./common/header";
import {
  SidemenuStyle,
  AddClientStyle,
  SidemenuTextStyle,
  SidemenuParentStyle,
  LogoFoot,
  PeraFoot,
  StyledModalHeader,
  SeatButtonStyle,
  ConfirmButtonModalAddChairs,
  SpacedFlex,
  Empty,
  ProfilePopUpButton,
} from "./styled/common.styled";
import { FlexHLeft, FlexH, FlexV, FlexVBottom } from "./styled/global.styled";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Seats from "./common/modal/Seats";
import Listing from "./common/modal/Listing";
import Chairs from "./common/modal/Chairs";
import PhoneNumber from "./common/input/PhoneNumber";
import Input from "./common/input/Input";
import Radio from "./common/input/Radio";
import TextArea from "./common/input/TextArea";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineNotificationsActive, MdSettings } from "react-icons/md";
import { FaChevronLeft, FaInfoCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import ProfileMsg from "./common/ProfileMsg";
import { GlobalContext } from "../../contextApi/Provider";
import { checkLogin } from "../../helpers/checkLogin";
import { GetLocalStorage, SaveLocalStorage } from "../../helpers/localStorage";
import { queueList } from "../../helpers/apiCalls/apiGet";

Modal.setAppElement("#__next");
Modal.defaultStyles.overlay.backgroundColor = "transparent";

const Layout = (props) => {
  const router = useRouter();

  const { authToken, loading, insidequeue,outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,statistics} = useContext(GlobalContext);

    useEffect(() => { 
      checkLogin(authToken, router, loading, insidequeue, outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,statistics);   
      const interval = setInterval(() => {
        checkLogin(authToken, router, loading, insidequeue, outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,statistics);  
      }, 3000);
      return () => clearInterval(interval); 
    },[]);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  //   console.log();

  const [seatingone, setSeatingone] = useState({ name: "INSIDE" });
  const [seatingtwo, setSeatingtwo] = useState({ name: "SINGLE" });
  const [seatingthree, setSeatingthree] = useState({ name: "BLACONY" });
  const [chairs, setChairs] = useState({ name: "1" });

  const chairsList = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
    { name: "12" },
    { name: "13" },
    { name: "14" },
    { name: "15" },
    { name: "16+" },
  ];
  const seatingonelistone = [
    { name: "INSIDE" },
    { name: "ANY" },
    { name: "OUTSIDE" },
  ];
  const seatingtwolisttwo = [
    { name: "SINGLE" },
    { name: "FAMILY" },
    { name: "BOTH" },
  ];
  const seatingthreelistthree = [
    { name: "BLACONY" },
    { name: "SMOKING" },
    { name: "ROOF" },
    { name: "FIRST FLOOR" },
    { name: "PARTY ZONE" },
    { name: "TERAS" },
  ];

  const handleSelectChairs = (e) => {
    setChairs(e);
  };
  const handleSelectseatingone = (e) => {
    setSeatingone(e);
  };
  const handleSelectseatingtwo = (e) => {
    setSeatingtwo(e);
  };
  const handleSelectseatingthree = (e) => {
    setSeatingthree(e);
  };
  const Homepage = props.fromInner?props.fromInner+'home':'home';
  const Holdpage = props.fromInner?props.fromInner+'hold':'hold';
  const Historypage = props.fromInner?props.fromInner+'history':'history';
  const Tablepage = props.fromInner?props.fromInner+'table':'table';

  const isHomepage = router.asPath.includes(Homepage);
  const isHoldpage = router.asPath.includes(Holdpage);
  const isHistorypage = router.asPath.includes(Historypage);
  const isTablepage = router.asPath.includes(Tablepage);

  const handleSetLastPage = () => { 
    SaveLocalStorage('lastPage', router.asPath);
    }
  return (
    <>
      {loading[0] === false ? (
        <>
          <div>
            <Headers
              pagename={props.pagename}
              clas={props.clas}
              msg={props.msg}
              listView={props.listView}
              listViewCls={props.listViewCls}
              gridViewCls={props.gridViewCls}
            />
            <div className="container">
              <FlexHLeft className="gap">
                <SidemenuParentStyle>
                  <SidemenuStyle>
                    <Link href={`${router.pathname}?addguest=addguest`}>
                      <AddClientStyle>
                        <b>+</b>
                        <strong> Add Guest </strong>
                      </AddClientStyle>
                    </Link>

                    <SidemenuTextStyle>
                      <Link href={Homepage}>
                        {isHomepage?
                        <h1>Queue</h1>:
                        <a href="#">Queue</a>
                        }
                        {/* if(isHomepage){<h1>Queue</h1> } */}
                      </Link>

                      <Link href={Holdpage}> 
                        {isHoldpage?
                        <h1>Hold</h1>:
                        <a href="#">Hold</a>
                        }
                      </Link>

                      <Link href={Historypage}>
                        {isHistorypage?
                        <h1>History</h1>:
                        <a href="#">History</a>
                        }
                      </Link>

                      <Link href={Tablepage} > 
                        {isTablepage?
                        <h1 onClick={handleSetLastPage}>Tables</h1>:
                        <a href="#" onClick={handleSetLastPage}>Tables</a>
                        }
                      </Link>
                    </SidemenuTextStyle>
                  </SidemenuStyle>
                  <FlexH className="mt-4 mb-3">
                    <LogoFoot src="../../img/logo.png" />

                    <FlexVBottom className="mb-2">
                      <PeraFoot>
                        Powered By <br />
                        Requeue Company
                        <br />
                        www.requeue.net
                      </PeraFoot>
                    </FlexVBottom>
                  </FlexH>
                </SidemenuParentStyle>

                {props.body}
              </FlexHLeft>
            </div>
          </div>

          <Modal
            isOpen={!!router.query.addguest}
            onRequestClose={() => router.push("")}
            portalClassName="modalss"
            className="modal"
          >
            <StyledModalHeader>
              <a onClick={() => router.push("")}>
                <VscChromeClose />
              </a>
            </StyledModalHeader>

            <FlexH className="mt-4 mb-3 gap">
              <div className="w-100">
                <Seats>
                  <h2>SEATING AREA</h2>
                  <Listing
                    listItem={seatingonelistone}
                    value={seatingone.name}
                    handleSelect={handleSelectseatingone}
                  />
                  <Listing
                    listItem={seatingtwolisttwo}
                    value={seatingtwo.name}
                    handleSelect={handleSelectseatingtwo}
                  />
                  <Listing
                    listItem={seatingthreelistthree}
                    value={seatingthree.name}
                    handleSelect={handleSelectseatingthree}
                  />
                </Seats>
              </div>

              <SpacedFlex className="w-100">
                <Seats>
                  <h2>CHAIRS</h2>
                  <Chairs
                    chairsItem={chairsList}
                    value={chairs.name}
                    handleSelect={handleSelectChairs}
                  />
                </Seats>
                <ConfirmButtonModalAddChairs>
                  CONFIRM
                </ConfirmButtonModalAddChairs>
              </SpacedFlex>

              <div className="w-100">
                <Seats>
                  <h2>CUSTOMER DETAILS</h2>
                  <PhoneNumber></PhoneNumber>
                  <Input name="name" placeholder="GUEST NAME" />
                  <div className="mt-4 mb-3">
                    <Radio name="test">MALE</Radio>
                    <Radio name="test">FEMALE</Radio>
                  </div>
                  <TextArea
                    className=""
                    id="textareaModal"
                    name="textareaModal"
                    placeholder="ADD NOTE ( OPTIONAL )"
                  />
                </Seats>
              </div>
            </FlexH>
          </Modal>

          <Modal
            isOpen={!!router.query.profile}
            onRequestClose={() => router.push("")}
            portalClassName="ProfileModalParent"
            className="modal"
          >
            <StyledModalHeader>
              <a onClick={() => router.push("")}>
                <VscChromeClose />
              </a>
            </StyledModalHeader>

            <FlexH className="mt-4 mb-3 gap minH-600">
              <div className="w-400px">
                <ul className="list-unstyled fxlx">
                  <li className="list-unstyled-item">
                    <img src="/img/Profile.png" className="img-circle" />
                  </li>
                  <li className="list-unstyled-item mb-2">
                    <p>Restaurant : Trapani</p>
                    <p>Area : The avenues mall</p>
                    <p>Branch ID : 34</p>
                    <p>User : Omar12</p>
                    <p>
                      Expired in :{" "}
                      <span className="text-danger">22 May 2022</span>
                    </p>
                  </li>
                  <li className="list-unstyled-item">
                    <Link href={props.fromInner?props.fromInner+'settings':'settings'}>
                      <ProfilePopUpButton>
                        {" "}
                        <i className="v_middle">
                          <MdSettings />
                        </i>{" "}
                        <span className="v_middle">Setting</span>
                      </ProfilePopUpButton>
                    </Link>
                  </li>
                  <li className="list-unstyled-item">
                    <Link href="#">
                      <ProfilePopUpButton>
                        {" "}
                        <i className="v_middle">
                          <FaInfoCircle />
                        </i>{" "}
                        <span className="v_middle">Manual </span>
                      </ProfilePopUpButton>
                    </Link>
                  </li>
                  <li className="list-unstyled-item">
                    <ProfilePopUpButton>
                      {" "}
                      <i className="v_middle">
                        <RiLogoutBoxLine />
                      </i>{" "}
                      <span className="v_middle">Logout</span>
                    </ProfilePopUpButton>
                  </li>
                </ul>
              </div>

              <div className="flexParentModal pl-2 pr-5">
                <h2 className="text-center">
                  <span className="v_middle">INBOX</span>{" "}
                  <MdOutlineNotificationsActive className="v_middle fsize30 mr-2" />
                </h2>
                <div className="profileModalMessage">
                  {/* <Empty className="">
                                    Empty inbox message 
                            </Empty> */}
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                  <ProfileMsg />
                </div>
              </div>
            </FlexH>
          </Modal>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default Layout;
