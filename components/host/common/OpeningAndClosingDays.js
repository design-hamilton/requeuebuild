import { MdAddToPhotos } from "react-icons/md";
import { FlexH } from "../styled/global.styled";
import DaysModal from "./DaysModal";
import { ClosingInputModal } from "./input/ClosingInputModal";
import { OpeningInputModal } from "./input/OpeningInputModal";


export default function OpeningAndClosingDays(props) {
    return (
        <>
            <FlexH className="mt-5 mb-2 gap pl-5 pr-5 w-100 text-center relative"> 
                <div className="absolute_right" onClick={props.handleAddNewTime}> 
                    <span>Add new schedule</span> <i><MdAddToPhotos/></i> 
                </div>

                <div className=" pl-3 pr-3 text-center">
                    <OpeningInputModal head="Opening time" name="Openingtime" placeholder="Opening Time" value="" />
                </div>

                <div className=" pl-3 pr-3 text-center">
                    <ClosingInputModal head="Closing time" name="Closingtime" placeholder="Closing Time" value="" />
                </div> 
            </FlexH>
            <div className="pl-5 pr-5 w-100 mb-4 fl">
                <DaysModal days={props.days} value={props.value} handleSelect={props.handleSelect} />
            </div>
        </>
    )
}
