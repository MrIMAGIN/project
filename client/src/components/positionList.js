import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PositionItem from "./positionItem";

const PositionList = observer(() => {
    const {position} = useContext(Context);

    return (
        <Row className="d-flex">
            {position.positions.map(position =>
                <PositionItem key={position.id} position={position}/>
            )}
        </Row>
    );
});

export default PositionList;