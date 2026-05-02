
type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

function handleData(data: (User | Product | Order)[]): string[] {
  return data.map(item => {
    switch (item.type) {
      case 'user':
        return `Hello ${item.name}, age ${item.age}`;

      case 'product':
        return `Product ${item.id} costs ${item.price}`;

      case 'order':
        return `Order ${item.orderId} total amount ${item.amount}`;

      default:
        return "Unknown data type";
    }
  });
}