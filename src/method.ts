
type SoldItem = {
    name: string;
    price: number;
};


class Shop {
    name:string
    soldItems: SoldItem[] = []

    constructor(name:string, soldItems:any) {
        this.name = name
        this.soldItems = []
    }

    // Method
    buy (name:string, price:number) {
        this.soldItems.push({name, price})
    }

    // another method
    totalSold (name:string, price:number) {
        const total = this.soldItems.reduce((acc, item) => acc+item.price, 0)
        return total
    }

}


const myShop = new Shop ("Talukder Grocary", [])
myShop.buy("Coffee", 670)
myShop.buy("Cookies", 1250)

console.log(myShop.totalSold());


