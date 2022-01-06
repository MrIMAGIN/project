import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import StaffItem from "./staffItem";

const StaffList = observer(() => {
    const {staff} = useContext(Context);

    return (
        <Row className="d-flex">
            {staff.staffs.map(staff =>
                <StaffItem key={staff.id} staff={staff}/>
            )}
        </Row>
    );
});

export default StaffList;