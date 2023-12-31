import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import ProductValidatorFactory from "../factory/product.validator.factory";
import ProductInterface from "./product.interface";

export default class Product extends Entity implements ProductInterface {

    //private _id: string;
    private _name: string;
    private _price: number;

    constructor (id: string, name: string, price: number){
        super();
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
        if (this.notification.hasErrors()){
            throw new NotificationError(this.notification.getErrors());
        }
    }

    get id(): string{
        return this._id;
    }

    get name(): string{
        return this._name;
    }

    get price(): number{
        return this._price;
    }

    changeName(name: string): void{
        this._name = name;
        this.validate();
        if (this.notification.hasErrors()){
            throw new NotificationError(this.notification.getErrors());
        }
    }

    changePrice(price: number): void{
        this._price = price;
        this.validate();
        if (this.notification.hasErrors()){
            throw new NotificationError(this.notification.getErrors());
        }
    }

    validate(): boolean {
//         if (this._id.length === 0){
//             this.notification.addError({
//                 context: "product",
//                 message: "Id is required",
//             });
// //            throw new Error("Id is required")
//         }

//         if (this._name.length === 0){
//             this.notification.addError({
//                 context: "product",
//                 message: "name is required",
//             });
// //            throw new Error("name is required")
//         }

//         if (this._price < 0){
//             this.notification.addError({
//                 context: "product",
//                 message: "Price must be greater than zero",
//             });
// //            throw new Error("Price must be greater than zero")
//         }
        ProductValidatorFactory.create().validate(this);
        return true;
    }

}