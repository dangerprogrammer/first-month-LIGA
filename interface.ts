interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: User = {
    name: "John",
    id: 1,
    email: ""
};

interface Employees extends User {
    salary: number;
}

let employee: Employees = {
    name: "John",
    id: 1,
    email: "",
    salary: 1000
};

interface Login {
    login(): User;
}

// @Component({})
// class Component {
//     constructor(public name: string) {}
// }

export { Login, User };