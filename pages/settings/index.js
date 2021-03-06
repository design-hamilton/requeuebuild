import { useRouter } from 'next/router'
import { FlexHspace, FlexH } from '../../components/host/styled/global.styled';
import ThemeChanger from '../../components/host/common/ThemeChanger';
import { FaChevronLeft, FaRegPaperPlane } from 'react-icons/fa';
import { MdSettings, MdOutlineNotificationsActive } from 'react-icons/md';
import { GoPrimitiveDot } from 'react-icons/go';
import { SettingsBox, GridForTwo, EditSetting, InputSettings, SaveSetting, StyledModalHeader, SpacedFlex, SaveModl, ModlTextarea, DangerPera } from '../../components/host/styled/common.styled';
import Switch from '../../components/host/common/input/Switch';
import { useState, useEffect, useContext } from 'react';
import Select from '../../components/host/common/input/Select';
import Link from 'next/link';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { CgCloseO } from 'react-icons/cg';
import { OpeningInputModal } from '../../components/host/common/input/OpeningInputModal';
import { ClosingInputModal } from '../../components/host/common/input/ClosingInputModal';
import DaysModal from '../../components/host/common/DaysModal';
import OpeningAndClosingDays from '../../components/host/common/OpeningAndClosingDays'; 
import { GetLocalStorage } from '../../helpers/localStorage';
import { GlobalContext } from '../../contextApi/Provider';
import { settingsData } from '../../helpers/apiCalls/apiGet';
import MainParentLayout from '../../components/host/MainParentLayout';
import { getCookie } from 'cookies-next';


Modal.setAppElement('#__next');
Modal.defaultStyles.overlay.backgroundColor = 'rgb(36 38 39 / 85%)';

const index = () => {

    const {authToken,loading,settings} = useContext(GlobalContext);  

    

// console.log(settings[0]);




    const router = useRouter();

    const [autocancel, setAutocancel] = useState(settings[0].autoCancel);
    const handelAutocancel = (e) => { setAutocancel(!autocancel); }

    const [cancelreason, setCancelReason] = useState(settings[0].cancelReasonRequired);
    const handelCancelreason = (e) => { setCancelReason(!cancelreason); }

    const [branchoffline, setBranchoffline] = useState(false);
    const handelBranchoffline = (e) => { setBranchoffline(!branchoffline); }

    const [branchclose, setBranchclose] = useState(false);
    const handelBranchclose = (e) => { setBranchclose(!branchclose); }

    const [specialarea, setSpecialarea] = useState(false);
    const handelSpecialarea = (e) => { setSpecialarea(!specialarea); }

    const [anywherearea, setAnywherearea] = useState(false);
    const handelAnywherearea = (e) => { setAnywherearea(!anywherearea); }

    const [autohold, setAutohold] = useState(false);
    const handelAutohold = (e) => { setAutohold(!autohold); }

    const [hold, setHold] = useState(false);
    const handelHold = (e) => { setHold(!hold); }

    const [branchfull, setBranchfull] = useState(false);
    const handelBranchfull = (e) => { setBranchfull(!branchfull); }

    const [outsidefull, setOutsidefull] = useState(false);
    const handelOutsidefull = (e) => { setOutsidefull(!outsidefull); }

    const [insidefull, setInsidefull] = useState(false);
    const handelInsidefull = (e) => { setInsidefull(!insidefull); }

    const [closeoutside, setCloseoutside] = useState(false);
    const handelCloseoutside = (e) => { setCloseoutside(!closeoutside); }

    const [autofulloutside, setAutofulloutside] = useState(false);
    const handelAutofulloutside = (e) => { setAutofulloutside(!autofulloutside); }

    const [showoutside, setShowoutside] = useState(false);
    const handelShowoutside = (e) => { setShowoutside(!showoutside); }

    const [closeinside, setCloseinside] = useState(false);
    const handelCloseinside = (e) => { setCloseinside(!closeinside); }

    const [autofullinside, setAutofullinside] = useState(false);
    const handelAutofullinside = (e) => { setAutofullinside(!autofullinside); }

    const [showinside, setShowinside] = useState(false);
    const handelShowinside = (e) => { setShowinside(!showinside); }

    const [lastpage, setLastpage] = useState()
    useEffect(() => { 
        setLastpage(GetLocalStorage('lastPage')?GetLocalStorage('lastPage'):'/host/home')
    }, [])




    const cancelTime = [{ name: "1 min" }, { name: "2 min" }, { name: "3 min" }, { name: "5 min" }, { name: "10 min" }, { name: "15 min" }, { name: "30 min" }];
    const [selectedcancelTime, setSelecetedcancelTime] = useState();

    const holdTime = [{ name: "1 min" }, { name: "2 min" }, { name: "3 min" }, { name: "5 min" }, { name: "10 min" }, { name: "15 min" }, { name: "30 min" }];
    const [selectedholdTime, setSelecetedholdTime] = useState();

    const autofulloutsideselect = [{ name: "5" }, { name: "10" }, { name: "15" }, { name: "25" }, { name: "50" }, { name: "75" }, { name: "100" }];
    const [selectedautofulloutsideselect, setSelecetedautofulloutsideselect] = useState();

    const maxchairsoutsideselect = [{ name: "5" }, { name: "10" }, { name: "15" }, { name: "25" }, { name: "50" }, { name: "75" }, { name: "100" }];
    const [selectedmaxchairsoutsideselect, setSelecetedmaxchairsoutsideselect] = useState();

    const autofullinsideselect = [{ name: "5" }, { name: "10" }, { name: "15" }, { name: "25" }, { name: "50" }, { name: "75" }, { name: "100" }];
    const [selectedautofullinsideselect, setSelecetedautofullinsideselect] = useState();

    const maxchairsinsideselect = [{ name: "5" }, { name: "10" }, { name: "15" }, { name: "25" }, { name: "50" }, { name: "75" }, { name: "100" }];
    const [selectedmaxchairsinsideselect, setSelecetedmaxchairsinsideselect] = useState();

    const turnnotification = [{ name: "5" }, { name: "10" }, { name: "15" }, { name: "25" }, { name: "50" }, { name: "75" }, { name: "100" }];
    const [selectedturnnotification, setSelecetedturnnotification] = useState();


    const [days, setDays] = useState([{ name: "Monday" }]);  
    const daysList = [{ name: "Monday" }, { name: "Tuesday" }, { name: "Wednesday" }, { name: "Thursday" }, { name: "Friday" }, { name: "Saturday" }, { name: "Sunday" }];
    const handleSelectdays = (e) => {
        const foundDay = days.find(day => day.name === e.name)
        if (foundDay) {
            const new_days = days.filter(day => day.name !== e.name)
            setDays(new_days)
        } else {
            setDays([...days, e]);
        }
    }



    const [additionaldays, setAdditionaldays] = useState(1);
 
    const handleAddNewTime = () =>{
        // alert("ss");
        setAdditionaldays(additionaldays+1)
    }
    const handleAlert = (i) =>{
        // setAdditionaldays(delete additionaldays[i])
    }

  
 

    // useEffect(() => {
    //     setAutocancel(settings[0].autoCancel)
    // })

    
    useEffect(() => {
       
        let token = getCookie('token'); 

        if(token){
            authToken[1](token);
            loading[1](false);  
                  settingsData(token).then((response) => {  
                    if(response.data.success){ 
                        settings[1](response.data.data); 
                        // console.log(settings[0]);
                    } 
                  }).catch((error)=> {
                    console.log(error);  
                  }); 
    
    
        }else{
            authToken[1]();
            router.push('login');
            loading[1](true); 
        }
        
    }, []); 

    
    return (
        <MainParentLayout fullpage={

        <>
            <div className="container pb-4">
                <FlexHspace className="mt-5 settings">
                    <Link href={lastpage+'?profile=profile'}>
                        <div className="bck" ><FaChevronLeft className="v_middle" /> <span className="v_middle">Go Back</span></div>
                    </Link>
                    {/* <div className="bck" onClick={() => router.back()}><FaChevronLeft className="v_middle" /> <span className="v_middle">Go Back</span></div> */}
                    <h3 className="m-0"><MdSettings className="v_middle" /> <span className="v_middle">Setting</span> </h3>
                    <ThemeChanger></ThemeChanger>
                </FlexHspace>
                <GridForTwo>
                    <SettingsBox>
                        <h3><GoPrimitiveDot className="v_middle" /> <span className="v_middle">Cancel</span></h3>
                        <div className="pl-4 pr-4">
                            <ul className="listUnstyled pl-0">
                                <li className="F-50 mt-4">
                                    <div>
                                        <p>
                                            Auto cancel
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={autocancel ? true : false} onChange={handelAutocancel} />
                                        </div>
                                        <div>
                                            <Select options={cancelTime} setSelecetedValue={setSelecetedcancelTime} />
                                        </div>
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div>
                                        <p>
                                            Canceled reasons
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={cancelreason ? true : false} onChange={handelCancelreason} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </SettingsBox>
                    <SettingsBox>
                        <h3><GoPrimitiveDot className="v_middle" /> <span className="v_middle">Current status </span></h3>
                        <div className="pl-4 pr-4">
                            <ul className="listUnstyled pl-0">
                                <li className="F-50 mt-4">
                                    <div className="w-100">
                                        <p>
                                            Branche Offline
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={branchoffline ? true : false} onChange={handelBranchoffline} />
                                        </div>
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div className="w-100">
                                        <p>
                                            Branche close
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={branchclose ? true : false} onChange={handelBranchclose} />
                                        </div>
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div className="w-100">
                                        <p>
                                            Opening and closing system
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Link href={`${router.pathname}?openingAndClosing=openingAndClosing`} as={`${router.pathname}/openingAndClosing`}>
                                                <EditSetting>Edit</EditSetting>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </SettingsBox>
                    <SettingsBox>
                        <h3><GoPrimitiveDot className="v_middle" /> <span className="v_middle">Notifications  </span></h3>

                        <div className="pl-4 pr-4">
                            <ul className="listUnstyled pl-0">
                                <li className="F-50 mt-4">
                                    <div className="w-100">
                                        <p>
                                            Message Customized  <FaRegPaperPlane className="v_middle fsize30 ml-2" />
                                        </p>

                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Link href={`${router.pathname}?editCustomizedMessage=editCustomizedMessage`} as={`${router.pathname}/editCustomizedMessage`}>
                                                <EditSetting>Edit</EditSetting>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div className="w-100">
                                        <p>
                                            Auto Notification <MdOutlineNotificationsActive className="v_middle fsize30 ml-2" />
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Link href={`${router.pathname}?editAutoNotification=editAutoNotification`} as={`${router.pathname}/editAutoNotification`}>
                                                <EditSetting>Edit</EditSetting>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </SettingsBox>
                    <SettingsBox>
                        <h3><GoPrimitiveDot className="v_middle" /> <span className="v_middle">Area  </span></h3>
                        <div className="pl-4 pr-4">
                            <ul className="listUnstyled pl-0">
                                <li className="F-50  mt-4">
                                    <div className="w-100">
                                        <p>
                                            Special areas
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={specialarea ? true : false} onChange={handelSpecialarea} />
                                        </div>
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div className="w-100">
                                        <p>
                                            Show anywhere area
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={anywherearea ? true : false} onChange={handelAnywherearea} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </SettingsBox>
                    <SettingsBox>
                        <h3><GoPrimitiveDot className="v_middle" /> <span className="v_middle">Hold</span></h3>
                        <div className="pl-4 pr-4">
                            <ul className="listUnstyled pl-0">
                                <li className="F-50 mt-4">
                                    <div>
                                        <p>
                                            Auto hold
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={autohold ? true : false} onChange={handelAutohold} />
                                        </div>
                                        <div>
                                            <Select options={holdTime} setSelecetedValue={setSelecetedholdTime} />
                                        </div>
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div>
                                        <p>
                                            Hold
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={hold ? true : false} onChange={handelHold} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </SettingsBox>
                    <SettingsBox>
                        <h3><GoPrimitiveDot className="v_middle" /> <span className="v_middle">Full</span></h3>
                        <div className="pl-4 pr-4">
                            <ul className="listUnstyled pl-0">
                                <li className="F-50 mt-4">
                                    <div className="w-100">
                                        <p>
                                            Branche Full
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={branchfull ? true : false} onChange={handelBranchfull} />
                                        </div>
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div className="w-100">
                                        <p>
                                            Outside Full
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={outsidefull ? true : false} onChange={handelOutsidefull} />
                                        </div>
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div className="w-100">
                                        <p>
                                            Inside Full
                                        </p>
                                    </div>
                                    <div className="F-50">
                                        <div>
                                            <Switch check={insidefull ? true : false} onChange={handelInsidefull} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </SettingsBox>

                    <SettingsBox>
                        <h3><GoPrimitiveDot className="v_middle" /> <span className="v_middle">Outside area</span> <SaveSetting>Save</SaveSetting> </h3>

                        <div className="pl-4 pr-4">
                            <ul className="listUnstyled pl-0">
                                <li className="F-50 mt-4">
                                    <div className="w-100 p-2">
                                        <p className="mb-2">
                                            English
                                        </p>
                                        <InputSettings className="w-100 " placeholder="Change outside name  " />
                                    </div>
                                    <div className="w-100  p-2">
                                        <p className="mb-2">
                                            Arabic
                                        </p>
                                        <InputSettings className="w-100 arabic" placeholder="Change outside name  " />
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div className="pl-5 F-50 w-100">
                                        <div className="pl-3 pr-3 pt-2   w-75">
                                            <ul className="listUnstyled pl-0">
                                                <li className="F-50  mt-4">
                                                    <div className="w-75">
                                                        <p>
                                                            Close outside
                                                        </p>
                                                    </div>
                                                    <div className="w-25">
                                                        <div>
                                                            <Switch check={closeoutside ? true : false} onChange={handelCloseoutside} />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="F-50  mt-4">
                                                    <div className="w-75">
                                                        <p>
                                                            Auto full
                                                        </p>
                                                    </div>
                                                    <div className="w-25">
                                                        <div>
                                                            <Switch check={autofulloutside ? true : false} onChange={handelAutofulloutside} />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="F-50  mt-4">
                                                    <div className="w-75">
                                                        <p>
                                                            Show outside area
                                                        </p>
                                                    </div>
                                                    <div className="w-25">
                                                        <div>
                                                            <Switch check={showoutside ? true : false} onChange={handelShowoutside} />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pl-3 pr-3 pt-2 flex-v-center  w-25">
                                            <ul className="listUnstyled pl-0">
                                                <li className="F-50  mt-4">
                                                    <div>
                                                        <Select options={autofulloutsideselect} setSelecetedValue={setSelecetedautofulloutsideselect} />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="F-50 mt-4">
                                    <div className="pl-5 F-50 w-100">
                                        <div className="pl-3 pr-3   pb-2 w-75">
                                            <p>
                                                Maximum chairs
                                            </p>
                                        </div>
                                        <div className="pl-3 pr-3  pb-2 w-25">

                                            <div>
                                                <Select options={maxchairsoutsideselect} setSelecetedValue={setSelecetedmaxchairsoutsideselect} />
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </SettingsBox>

                    <SettingsBox>
                        <h3><GoPrimitiveDot className="v_middle" /> <span className="v_middle">inside area</span> <SaveSetting>Save</SaveSetting> </h3>

                        <div className="pl-4 pr-4">
                            <ul className="listUnstyled pl-0">
                                <li className="F-50 mt-4">
                                    <div className="w-100 p-2">
                                        <p className="mb-2">
                                            English
                                        </p>
                                        <InputSettings className="w-100" placeholder="Change inside name  " />
                                    </div>
                                    <div className="w-100  p-2">
                                        <p className="mb-2">
                                            Arabic
                                        </p>
                                        <InputSettings className="w-100 arabic" placeholder="Change inside name  " />
                                    </div>
                                </li>
                                <li className="F-50  mt-4">
                                    <div className="pl-5 F-50 w-100">
                                        <div className="pl-3 pr-3 pt-2   w-75">
                                            <ul className="listUnstyled pl-0">
                                                <li className="F-50  mt-4">
                                                    <div className="w-75">
                                                        <p>
                                                            Close inside
                                                        </p>
                                                    </div>
                                                    <div className="w-25">
                                                        <div>
                                                            <Switch check={closeinside ? true : false} onChange={handelCloseinside} />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="F-50  mt-4">
                                                    <div className="w-75">
                                                        <p>
                                                            Auto full
                                                        </p>
                                                    </div>
                                                    <div className="w-25">
                                                        <div>
                                                            <Switch check={autofullinside ? true : false} onChange={handelAutofullinside} />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="F-50  mt-4">
                                                    <div className="w-75">
                                                        <p>
                                                            Show inside area
                                                        </p>
                                                    </div>
                                                    <div className="w-25">
                                                        <div>
                                                            <Switch check={showinside ? true : false} onChange={handelShowinside} />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pl-3 pr-3 pt-2 flex-v-center  w-25">
                                            <ul className="listUnstyled pl-0">
                                                <li className="F-50  mt-4">
                                                    <div>
                                                        <Select options={autofulloutsideselect} setSelecetedValue={setSelecetedautofulloutsideselect} />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="F-50 mt-4">
                                    <div className="pl-5 F-50 w-100">
                                        <div className="pl-3 pr-3   pb-2 w-75">
                                            <p>
                                                Maximum chairs
                                            </p>
                                        </div>
                                        <div className="pl-3 pr-3  pb-2 w-25">

                                            <div>
                                                <Select options={maxchairsinsideselect} setSelecetedValue={setSelecetedmaxchairsinsideselect} />
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </SettingsBox>
                </GridForTwo>

            </div>



            {/* Customized Message */}

            <Modal isOpen={!!router.query.editCustomizedMessage}
                onRequestClose={() => router.push('')}
                portalClassName="modl"
                className="modal">


                <div className="w-100">
                    <h2 className="text-center"> <CgCloseO className="absolute-left pointer" onClick={() => router.push('')} /> <FaRegPaperPlane className="v_middle fsize30 mr-2" /> <span className="v_middle"> Message Customized </span> </h2>
                </div>
                <FlexH className="mt-5 mb-5 gap pl-5 pr-5">
                    <div className="w-100">
                        <p className="text-center m-0">English</p>
                        <ModlTextarea className="" id="textareaModal" name="textareaModal" defaultValue={settings[0].lilouCustomMessageEn} placeholder="ADD NOTE ( OPTIONAL )" />
                    </div>
                    <div className="w-100 ">
                        <p className="text-center m-0">Arabic</p>
                        <ModlTextarea className="arabic text-right" id="textareaModal" name="textareaModal" defaultValue={settings[0].lilouCustomMessageAr} placeholder="ADD NOTE ( OPTIONAL )" />
                    </div>
                </FlexH>
                <div className="w-100 text-center mb-2">
                    <SaveModl>Save</SaveModl>
                </div>
            </Modal>
            {/* Customized Message */}

            {/* Auto Notification */}
            <Modal isOpen={!!router.query.editAutoNotification}
                onRequestClose={() => router.push('')}
                portalClassName="modl"
                className="modal">


                <div className="w-100 relative">
                    <h2 className="text-center"> <CgCloseO className="absolute-left pointer" onClick={() => router.push('')} /> <MdOutlineNotificationsActive className="v_middle fsize30 mr-2" /> <span className="v_middle"> Auto Notification </span> </h2>
                    <div className="absolute-right top-sp">
                        <DangerPera className="">Automatically send to turn #</DangerPera>
                        <div className="flex-center">
                            <Select options={turnnotification} setSelecetedValue={setSelecetedturnnotification} />
                        </div>
                    </div>
                </div>
                <FlexH className="mt-5 mb-5 gap pl-5 pr-5">
                    <div className="w-100">
                        <p className="text-center m-0">English</p>
                        <ModlTextarea className="" id="textareaModal" name="textareaModal" defaultValue={settings[0].lilouNotificationMessageEn} placeholder="ADD NOTE ( OPTIONAL )" />
                    </div>
                    <div className="w-100 ">
                        <p className="text-center m-0">Arabic</p>
                        <ModlTextarea className="arabic text-right" id="textareaModal" name="textareaModal" defaultValue={settings[0].lilouNotificationMessageAr} placeholder="ADD NOTE ( OPTIONAL )" />
                    </div>
                </FlexH>
                <div className="w-100 text-center mb-2">
                    <SaveModl>Save</SaveModl>
                </div>
            </Modal>

            {/* Auto Notification */}


            {/* Opening and CLosing */}

            <Modal isOpen={!!router.query.openingAndClosing} onRequestClose={() => router.push('')} portalClassName="modl" className="modal mddll">
                <div className="w-100 relative">
                    <h2 className="text-center"> <CgCloseO className="absolute-left pointer" onClick={() => router.push('')} /> <span className="v_middle"> Opening and closing system </span> </h2>
                </div> 
                    {/* {additionaldays?
                    <OpeningAndClosingDays days={daysList} value={days} handleSelect={handleSelectdays} handleAddNewTime={handleAddNewTime}/>
                    :''} */}

                { [...Array(additionaldays)].map( ( el,i) => ( <OpeningAndClosingDays key={i} onClick={handleAlert(i)} days={daysList} value={days} handleSelect={handleSelectdays} handleAddNewTime={handleAddNewTime}/> ) ) }
                <div className="w-100 text-center mb-2">
                    <SaveModl>Save</SaveModl>
                </div>
            </Modal>

            {/* Opening and CLosing */}

        </>
        }/>
    )
}

export default index
