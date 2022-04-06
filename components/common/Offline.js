import { OfflineStyle } from "../styled/common.styled";
import { Offline, Online } from "react-detect-offline"; 

const Ofline = (props) => { 

    return (
        <> 
            <Offline >
                <OfflineStyle className="fadein">
                    <h1>OFFLINE MODE WORKING </h1>
                    <p>Please check your internet connection , Online customer not available ! </p>
                </OfflineStyle>
            </Offline>
        </>
    )
}

export default Ofline
