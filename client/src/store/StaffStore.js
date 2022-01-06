import {makeAutoObservable} from "mobx";

export default class StaffStore {
    constructor() {
        this._staffs = [];
        makeAutoObservable(this);
    }

    setStaff(staffs) {
        this._staffs = staffs;
    }

    get staffs() {
        return this._staffs;
    }
}