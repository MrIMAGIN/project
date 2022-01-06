import React, { useContext } from 'react';
import {useHistory} from "react-router-dom";

const PositionItem = ({position}) => {
    const history = useHistory();

    return (
        <div className="d-flex">
            <div>{position.id} {position.name}</div>
        </div>  
    )
}

export default PositionItem;