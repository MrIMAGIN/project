import React, { useContext } from 'react';
import {useHistory} from "react-router-dom";

const StaffItem = ({staff}) => {
    const history = useHistory();

    return (
        <div className="d-flex">
            <div>{staff.id} {staff.name} {staff.surname} {staff.patronymic} {staff.positionId}</div>
        </div>  
    )
}

export default StaffItem;