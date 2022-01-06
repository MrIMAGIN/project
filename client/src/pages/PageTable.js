import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState } from "react";
import '../PageTable.css';
import {Context} from "../index";
import PositionList from "../components/positionList";
import StaffList from "../components/staffList";
import { createPosition, getPosition, delPosition, upPosition } from '../http/positionAPI';
import { createStaff, getStaff, delStaff, upStaff } from '../http/StaffAPI';

const PageTable = observer (() => {
    const {position, staff} = useContext(Context);
    const [index, setIndex] = useState(0);
    const [tmp, setTmp] = useState(0);


    const clickPosition = async () => {
        try {
            let data = await getPosition();
            position.setPosition(data);
            console.log(data);
            setIndex(1);
            setTmp(1);

        } catch (e) {
            alert(e.responce.data.message);
        }
    }

    const clickStaff = async () => {
        try {
            let data = await getStaff();
            staff.setStaff(data);
            console.log(data);
            setIndex(2);
            setTmp(2);

        } catch (e) {
            alert(e.responce.data.message);
        }
    }

    const clickAdd = async () => {
        try {
            if(tmp == 1) {
                var val = document.getElementById('name').value;
                if(val.length != 0)
                {
                    let data = await createPosition(val);
                    data = await getPosition();
                    position.setPosition(data);
                    console.log(data);
                }   
            }
            if(tmp == 2) {
                var name = document.getElementById('name').value;
                var surname = document.getElementById('surname').value;
                var patronymic = document.getElementById('patronymic').value;
                var positionId = document.getElementById('positionId').value;

                if(name.length != 0)
                {
                    let data = await createStaff(name, surname, patronymic, positionId);
                    data = await getStaff();
                    staff.setStaff(data);
                    console.log(data);
                }   
            }    
        } catch (e) {
            alert(e.responce.data.message);
        }
    }

    const clickDel = async () => {
        try {
            if(tmp == 1) {
                var val = document.getElementById('id').value;
                if(val.length != 0)
                {
                    let data = await delPosition(val);
                    data = await getPosition();
                    position.setPosition(data);
                    console.log(data);
                }
            }
            if(tmp == 2) {
                var val = document.getElementById('id').value;
                if(val.length != 0)
                {
                    let data = await delStaff(val);
                    data = await getStaff();
                    staff.setStaff(data);
                    console.log(data);
                }   
            } 

        } catch (e) {
            alert(e.responce.data.message);
        }
    }

    const clickUpdate = async () => {
        try {
            if(tmp == 1) {
                var id_val = document.getElementById('id').value;
                var val = document.getElementById('name').value;
                if(val.length != 0)
                {
                    let data = await upPosition(id_val, val);
                    data = await getPosition();
                    position.setPosition(data);
                    console.log(data);
                }
            }
            if(tmp == 2) {
                var id = document.getElementById('id').value;
                var name = document.getElementById('name').value;
                var surname = document.getElementById('surname').value;
                var patronymic = document.getElementById('patronymic').value;
                var positionId = document.getElementById('positionId').value;
                if(id.length != 0)
                {
                    let data = await upStaff(id, name, surname, patronymic, positionId);
                    data = await getStaff();
                    staff.setStaff(data);
                    console.log(data);
                } 
            }

        } catch (e) {
            alert(e.responce.data.message);
        }
    }


    return (
        <div className="main">
        <div className="main_row">
            <div className="menu">
                <h1 className="nav_text">Таблицы</h1>
                    <ul className="navbar-nav nav_item_m">
                        <li className="nav-item">
                            <button onClick={() => clickPosition()} className="btn btn_t">Должности</button>
                        </li>
                            <li className="nav-item">
                            <button onClick={() => clickStaff()} className="btn btn_t">Персонал</button>
                        </li>
                            <li className="nav-item">
                        <button className="btn btn_t">Таблица3</button>
                            </li>
                        <li className="nav-item">
                            <button className="btn btn_t">Таблица4</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn_t">Таблица5</button>
                        </li>
                    </ul>
            </div>
        </div>

        <div className="main_row">
            <div>
                <div className="div_color">
                    {index == 0 ? <h2 className="h3 text-center mt-4">Выберете таблицу</h2> : <></>}
                    <div className="item mt-4">
                        {index == 1 ? <PositionList/> : <></>}
                        {index == 2 ? <StaffList/> : <></>}
                    </div>  
                </div>
            </div>

            <div className="div_inp">
                <input type="text" className="inp" id="id" placeholder="id"/>
                <input type="text" className="inp" id="name" placeholder="name"></input>
                <input type="text" className="inp" id="surname" placeholder="surname"></input>
                <input type="text" className="inp" id="patronymic" placeholder="patronymic"></input>
                <input type="text" className="inp" id="positionId" placeholder="positionId"></input>
                <button className="btn btn_m" onClick={() => clickAdd()}>Добавить</button>
                <button className="btn btn_m" onClick={() => clickUpdate()}>Обновить</button>
                <button className="btn btn_m" onClick={() => clickDel()}>Удалить</button>
            </div>
        </div>   
    </div>
    )
});

export default PageTable;