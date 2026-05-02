class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(name: string, price: number, id: number){
        this.name = name;
        this.price = price;
        this.id = id;
    }
    getProductInfo() {
        //this.id = 30; - it's a read only property, cannot be changed
        return `This ${this.name} is $ ${this.price}`;

    }
}