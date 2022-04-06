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
  SaveModl,
  StyledInputModal,
  TeaxtAreaModalStyle,
  DangerPera,
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
import MainParentLayout from "./MainParentLayout";
import { addClient, addQueue } from "../../helpers/apiCalls/apiPost";

Modal.setAppElement("#__next");
Modal.defaultStyles.overlay.backgroundColor = "transparent";

const Layout = (props) => {
  const router = useRouter();

  const { seatingarea, guestfrommobile, authToken } = useContext(GlobalContext);

  //   useEffect(() => {
  //     checkLogin(authToken, router, loading, insidequeue, outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,settings);
  //     const interval = setInterval(() => {
  //       checkLogin(authToken, router, loading, insidequeue, outsidequeue,outsidehold,insidehold,outsidehistory,insidehistory,settings);
  //     }, 4000);
  //     return () => clearInterval(interval);
  //   },[]);

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
  const [seatingareaIN, setSeatingareaIN] = useState({
    tags: [{ subTags: [] }],
  });
  const [seatingareaOUT, setSeatingareaOUT] = useState({
    tags: [{ subTags: [] }],
  });
  const [customerName, setCustomerName] = useState("");
  const [gender, setGender] = useState("Female");

  const [customer, setCustomer] = useState({
    id: 0,
    name: "",
    phone: "",
    country: 0,
    gender: "Male",
    note: "",
  });
  
  const [message, setMessage] = useState('');

  // const handleChange = (event) => {
  //   setGender(event.target.value);
  // };

  useEffect(() => {
    if (seatingarea[0].inside && seatingarea[0].outside) {
      setSeatingareaIN(seatingarea[0].inside);
      setSeatingareaOUT(seatingarea[0].outside);
    }
    if (guestfrommobile[0].id) {
      setCustomer({
        ...customer,
        id: guestfrommobile[0].id,
        country: guestfrommobile[0].country,
        phone: guestfrommobile[0].phone,
        name: guestfrommobile[0].name,
        gender: guestfrommobile[0].gender,
      });
    }
    else{
      setCustomer({
        ...customer, 
        country: guestfrommobile[0].country,
        phone: guestfrommobile[0].phone,
        name: '',
        gender:'',
        note:'',
      });
      setMessage('')
    }
  },[guestfrommobile[0]]);

  const [seatingone, setSeatingone] = useState({ name: "INSIDE" });
  const [seatingtwo, setSeatingtwo] = useState({
    name: "single",
    key: 1,
    subTags: [],
  });
  const [seatingthree, setSeatingthree] = useState({ name: "single", key: 1 });

  const seatingonelistone = [
    { name: "INSIDE" },
    { name: "ANY" },
    { name: "OUTSIDE" },
  ];

  const tagsAreaIn = seatingareaIN.tags.map((area) => ({
    name: area.name,
    key: area.tagID,
    subTags: area.subTags,
  }));
  const tagsAreaOut = seatingareaOUT.tags.map((area) => ({
    name: area.name,
    key: area.tagID,
    subTags: area.subTags,
  }));

  let seatingtwolisttwo;

  if (seatingone.name === "INSIDE") {
    seatingtwolisttwo = tagsAreaIn;
  } else if (seatingone.name === "OUTSIDE") {
    seatingtwolisttwo = tagsAreaOut;
  } else {
    seatingtwolisttwo = tagsAreaOut.concat(tagsAreaIn);
  }

  const SubtagsArea = seatingtwo.subTags.map((area) => ({
    name: area.name,
    key: area.tagID,
  }));

  const seatingthreelistthree = SubtagsArea;

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

  const Homepage = props.fromInner ? props.fromInner + "home" : "home";
  const Holdpage = props.fromInner ? props.fromInner + "hold" : "hold";
  const Historypage = props.fromInner ? props.fromInner + "history" : "history";
  const Tablepage = props.fromInner ? props.fromInner + "table" : "table";

  const isHomepage = router.asPath.includes("home");
  const isHoldpage = router.asPath.includes("hold");
  const isHistorypage = router.asPath.includes("history");
  const isTablepage = router.asPath.includes("table");

  const handleSetLastPage = () => {
    SaveLocalStorage("lastPage", router.asPath);
  };
  // const [custNew, setCustNew] = useState([]);
  const handleAddClient = () => {
    let token = authToken[0];
    const custInfo = {
      country: customer.country,
      phone: customer.phone,
      name: customer.name,
      gender: customer.gender,
    };
    const QueueInfo = {
      chairs: chairs.name,
      note: customer.note,
      clientId: customer.id,
      tablePosition: seatingone.name,
      tagId: seatingtwo.key,
      subTagId: seatingthree.key,
      client: {
        id: customer.id,
        country: customer.country,
        phone: customer.phone,
        name: customer.name,
        gender: customer.gender,
      },
    };
    if (guestfrommobile[0].id) { 
      addQueue(token, QueueInfo)
        .then((response) => {
          if (response.data.success) {
            setCustomer({
              ...customer,
              id: 0,
              country: 1,
              phone: "",
              name: "",
              gender: "",
              note: "",
            });
            router.push("home");
          } 
        })
        .catch((error) => {
          // console.log(error);
          // alert(response)
          console.log(error.response.data);
          setMessage(error.response.data.message)
        }); 
    } else {
      addClient(token, custInfo) .then((response) => { 
        if (response.data.success) {
          // let accessToken = response.data.data.acessToken;
          // router.push('home');
          const data = response.data.data;
          setCustomer({
            ...customer,
            id: data.id,
            country: data.country,
            phone: data.phone,
            name: data.name,
            gender: data.gender,
          });
          console.log(data);
          addQueue(token, QueueInfo)
            .then((response) => {
              if (response.data.success) {
                
                setCustomer({
                  ...customer,
                  id: 0,
                  country: 1,
                  phone: "",
                  name: "",
                  gender: "",
                  note: "",
                });
                router.push("home");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    } 
  };

  const onCustomerDataChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };
  // console.log(customer);

  return (
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
                    {isHomepage ? <h1>Queue</h1> : <a href="#">Queue</a>}
                    {/* if(isHomepage){<h1>Queue</h1> } */}
                  </Link>

                  <Link href={Holdpage}>
                    {isHoldpage ? <h1>Hold</h1> : <a href="#">Hold</a>}
                  </Link>

                  <Link href={Historypage}>
                    {isHistorypage ? <h1>History</h1> : <a href="#">History</a>}
                  </Link>

                  <Link href={Tablepage}>
                    {isTablepage ? (
                      <h1 onClick={handleSetLastPage}>Tables</h1>
                    ) : (
                      <a href="#" onClick={handleSetLastPage}>
                        Tables
                      </a>
                    )}
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
              {/* <p>{_seating}</p> */}
              <Listing
                listItem={seatingonelistone}
                value={seatingone}
                handleSelect={handleSelectseatingone}
              />
              <Listing
                listItem={seatingtwolisttwo}
                value={seatingtwo}
                handleSelect={handleSelectseatingtwo}
              />
              <Listing
                listItem={seatingthreelistthree}
                value={seatingthree}
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
            <ConfirmButtonModalAddChairs onClick={handleAddClient}>
              CONFIRM
            </ConfirmButtonModalAddChairs>
          </SpacedFlex>

          <div className="w-100">
            <Seats>
              <h2>CUSTOMER DETAILS</h2>
              {message?<DangerPera>{message}</DangerPera>:''}
              <PhoneNumber />
              {guestfrommobile[0].id ? (
                <StyledInputModal
                  name="name"
                  disabled={true}
                  value={customer.name}
                />
              ) : (
                <StyledInputModal
                  name="name"
                  placeholder="GUEST NAME"
                  value={customer.name}
                  onChange={onCustomerDataChange}
                />
              )}
              {guestfrommobile[0].id ? (
                <div className="mt-4 mb-3">
                  <Radio
                    name="gender"
                    gn={customer.gender === "Male"}
                    disabled={true}
                    handleChange={onCustomerDataChange}
                  >
                    Male
                  </Radio>
                  <Radio
                    name="gender"
                    gn={customer.gender === "Female"}
                    disabled={true}
                    handleChange={onCustomerDataChange}
                  >
                    Female
                  </Radio>
                </div>
              ) : (
                <div className="mt-4 mb-3">
                  <Radio
                    name="gender"
                    gn={customer.gender === "Male"}
                    handleChange={onCustomerDataChange}
                  >
                    Male
                  </Radio>
                  <Radio
                    name="gender"
                    gn={customer.gender === "Female"}
                    handleChange={onCustomerDataChange}
                  >
                    Female
                  </Radio>
                </div>
              )}

              <TeaxtAreaModalStyle
                className=""
                id="textareaModal"
                name="note"
                placeholder="ADD NOTE (OPTIONAL)"
                value={customer.note}
                onChange={onCustomerDataChange}
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
                  Expired in : <span className="text-danger">22 May 2022</span>
                </p>
              </li>
              <li className="list-unstyled-item">
                <Link
                  href={
                    props.fromInner ? props.fromInner + "settings" : "settings"
                  }
                >
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

      {/* Customer Details */}

      <Modal
        isOpen={!!router.query.deatils}
        onRequestClose={() => router.push("")}
        portalClassName="modl"
        className="modal mddll"
      >
        <div className="w-100 relative">
          {/* <h2 className="text-center"> <CgCloseO className="absolute-left pointer" onClick={() => router.push('')} /> <span className="v_middle"> Customer Details system </span> </h2> */}
        </div>

        <div className="w-100 text-center mb-2">
          <SaveModl>Save</SaveModl>
        </div>
      </Modal>

      {/* Customer Details */}
    </>
  );
};

export default Layout;
