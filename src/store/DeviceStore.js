import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"},
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
        ]
        this._devices = [
            {
                id: 1,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
            {
                id: 2,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
            {
                id: 3,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
            {
                id: 4,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
            {
                id: 5,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
            {
                id: 6,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
            {
                id: 7,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
            {
                id: 8,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
            {
                id: 9,
                name: "12 pro",
                price: 100000,
                rating: 5,
                img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
                typeId: 2,
                brandId: 2,
            },
        ]
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    get brands() {
        return this._brands
    }
    get types() {
        return this._types
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}