import { Category } from "./category.model";

export class Product {

    name: string;
    id: number;
    category: Category;
    price: number;
    quantity: number;

    constructor(id: number, name:string, category:Category, price:number){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = 1;
    }



}
