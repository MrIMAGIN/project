import {makeAutoObservable} from "mobx";

export default class PositionStore {
    constructor() {
        this._positions = [];
        makeAutoObservable(this);
    }

    setPosition(positions) {
        this._positions = positions;
    }

    get positions() {
        return this._positions;
    }
}