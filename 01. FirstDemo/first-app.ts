let userName: string = "John Doe";
const userAge: number = 30;

let userId: string | number | boolean = "abc1";
userId = 12;
userId = true;

let user: object;

user = {
    id: 1,
    name: "John Doe",
    isActive: true,
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    }
};

let person: {
    id: number;
    name: string;
    isActive: boolean;
    age: number;
    address: {
        street: string;
        city: string;
        zipCode: string;
    };
};

person = {
    id: 1,
    name: "John Doe",
    isActive: true,
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    }
};


let hobbies: Array<string>;
hobbies = ["reading", "gaming", "coding"];

let numbers: number[];
numbers = [1, 2, 3, 4, 5];


function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

function getUserInfo(user: { id: number; name: string; isActive: boolean }): string {
    return `User Info: ID=${user.id}, Name=${user.name}, Active=${user.isActive}`;
}

function calculate(a: number, b: number, calculateFn: (x: number, y: number) => number)
{
    let res = calculateFn(a, b);
    console.log(`The result of the addition is: ${res}`);
}

calculate(5, 10, add);

type AddFn = (x: number, y: number) => number;

interface User {
    id: number;
    name: string;
    isActive: boolean;
    age: number;
    address: {
        street: string;
        city: string;
        zipCode: string;
    };
    hobbies: string[];
    greet: (name: string) => void;
    getUserInfo: () => string;
    calculate: (a: number, b: number, calculateFn: AddFn) => void;
}

let userObject: User; 

class UserClass implements User {
    id: number;
    name: string;
    isActive: boolean;
    age: number;
    address: {
        street: string;
        city: string;
        zipCode: string;
    };
    hobbies: string[];
    
    constructor(id: number, name: string, isActive: boolean, age: number, address: { street: string; city: string; zipCode: string }, hobbies: string[]) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;
    }

    greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }

    getUserInfo(): string {
        return `User Info: ID=${this.id}, Name=${this.name}, Active=${this.isActive}`;
    }

    calculate(a: number, b: number, calculateFn: AddFn): void {
        let res = calculateFn(a, b);
        console.log(`The result of the addition is: ${res}`);
    }
}

function createUser(id: number, name: string, isActive: boolean, age: number, address: { street: string; city: string; zipCode: string }, hobbies: string[]): User {
    return new UserClass(id, name, isActive, age, address, hobbies);
}

let newUser = createUser(1, "Jane Doe", true, 25, { street: "456 Elm St", city: "Othertown", zipCode: "67890" }, ["painting", "hiking"]);
console.log(newUser.getUserInfo());

type Admin = User & {
    role: string;
    permissions: string[];
    manageUsers: (users: User[]) => void;
};

let role: 'admin' | 'user' | 'guest' | null;

role = 'admin'; // valid
role = 'user'; // valid
role = 'guest'; // valid


let roles: Array<User | Admin> = [];

type DataStorage<T> = {
    storage : T[];
};