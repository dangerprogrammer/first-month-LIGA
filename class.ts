import * as UserLogin from './interface';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements UserLogin.Login {
    #id: number;

    protected name: string;

    address: Address;

    get empId(): number {
        return this.#id;
    }

    set empId(value: number) {
        this.#id = value;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    login(): UserLogin.User {
        return {
            name: "John",
            id: 1,
            email: ""
        };
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, "John", {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    pin: "10001"
});

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let address = john.getNameWithAddress();

console.log(address);

let mike = new Manager(2, "Mike", {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    pin: "10001"
});

console.log(mike.getNameWithAddress());