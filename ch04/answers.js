function printSeparator(myChar, lineSize = 70) {
  console.log(myChar.repeat(lineSize) + "\n");
}
// # 1
function createPoint(x, y) {
  return {
    x_: x,
    y_: y,
    getX: function () {
      return this.x_;
    },
    getY: function () {
      return this.y_;
    },
    translate: function (diffX, diffY) {
      this.x_ += diffX;
      this.y_ += diffY;
    },
    scale: function (factor) {
      this.x_ *= factor;
      this.y_ *= factor;
    },
  };
}

// # 2
function PointConstructor(x, y) {
  this.x = x;
  this.y = y;
}

PointConstructor.prototype.getX = function () {
  return this.x;
};

PointConstructor.prototype.getY = function () {
  return this.y;
};

PointConstructor.prototype.translate = function (diffX, diffY) {
  this.x += diffX;
  this.y += diffY;
};

PointConstructor.prototype.scale = function (factor) {
  this.x *= factor;
  this.y *= factor;
};

// # 3
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  translate(diffX, diffY) {
    this.x += diffX;
    this.y += diffY;
  }
  scale(factor) {
    this.x *= factor;
    this.y *= factor;
  }
}

// # 4
class PointWithGets {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  get Y() {
    return this._y;
  }
  translate(diffX, diffY) {
    this._x += diffX;
    this._y += diffY;
  }
  scale(factor) {
    this._x *= factor;
    this._y *= factor;
  }
}

function point2str(pointName, point) {
  return `${pointName}: (${point.getX()}, ${point.getY()})`;
}

function point2strWithGet(pointName, point) {
  return `${pointName}: (${point.x}, ${point.y})`;
}

function printPoints(
  firsPointName,
  firstPoint,
  secondPointName,
  secondPoint,
  toStrFunction = point2str
) {
  console.log(toStrFunction(firsPointName, firstPoint));
  console.log(toStrFunction(secondPointName, secondPoint));

  firstPoint.translate(5, 8);
  secondPoint.scale(3);
  printSeparator("-");

  console.log(toStrFunction(firsPointName, firstPoint));
  console.log(toStrFunction(secondPointName, secondPoint));

  printSeparator("*");
}

printPoints("point 01", createPoint(1, 2), "point 02", createPoint(10, 20));

printPoints(
  "point 03",
  new PointConstructor(3, 4),
  "point 04",
  new PointConstructor(30, 40)
);

printPoints("point 05", new Point(5, 6), "point 06", new Point(50, 60));

printPoints(
  "point 07",
  new Point(7, 8),
  "point 08",
  new Point(70, 80),
  point2strWithGet
);


// # 5
function createGreetable(str) {
  const result = new String(str);
  result.greet = function (greeting) {
    return `${greeting}, ${this}!`;
  };
  return result;
}

const g = createGreetable("World");
console.log(g.greet("Hello"));

function greetingFunction(greeting) {
  return `${greeting}, ${this}!, 2222`;
}

function createGreetable2(str) {
  const result = new String(str);
  result.greet = greetingFunction;
  return result;
}

const h = createGreetable2("World");
console.log(h.greet("Hello"));
printSeparator("*");


// # 6
const Employee = class {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100;
  }
};

function withGreeter(BaseClass) {
  return class extends BaseClass {
    greet(msg) {
      return `${msg}!!!`;
    }
  };
}

const GreetableEmployee = withGreeter(Employee);
const e = new GreetableEmployee("Harry Smith", 90000);
console.log(e.greet("Hello"));
printSeparator("*");


// # 7
class EmployeeWithPrivate {
  #name;
  #salary;
  constructor(name, salary) {
    this.#name = name;
    this.#salary = salary;
  }
  raiseSalary(percent) {
    this.#salary *= 1 + percent / 100;
  }
}


// # 8
class Parent {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }

  depth() {
    return 1 + Math.max(...this.children.map((n) => n.depth()));
  }
}

class Leaf {
  constructor(value) {
    this.value = value;
  }
  depth() {
    return 1;
  }
}
const wolf = new Leaf("Canis Lupus");
const dog = new Leaf("Canis Familiaris");
const canisGenus = new Parent("Canis", [wolf, dog]);
const cat = new Leaf("Felis catus");
const felisGenus = new Parent("Felis", [cat]);
const felidaeFamily = new Parent("Felidae", [felisGenus]);
const animaliaKindom = new Parent("Animalia", [canisGenus, felidaeFamily]);
console.log(`animaliaKindom.depth(): ${animaliaKindom.depth()}`);
printSeparator("*");


// # 9
class Random {
  static nextDouble(low, high) {
    return Math.random() * (high - low) + low;
  }

  static nextInt(low, high) {
    return Math.floor(Random.nextDouble(low, high));
  }

  static nextElement(array) {
    const randomIndex = Random.nextInt(0, array.length);
    return array[randomIndex];
  }
}
console.log(`Random.nextDouble(10.5, 13.3): ${Random.nextDouble(10.5, 13.3)}`);
console.log(`Random.nextInt(5, 9): ${Random.nextInt(5, 9)}`);
const someLetters = ["A", "B", "C", "D", "E", "F", "G"];
let randomLetter;
for (let i = 1; i <= 10; i++) {
  randomLetter = Random.nextElement(someLetters);
  console.log(`${i}: Random.nextElement(someLetters): ${randomLetter}`);
}
printSeparator("*");


// # 10
class BankAccount {
  #balance = 0;
  get balance() {
    return this.#balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount};
  }
}

class SavingsAccount extends BankAccount {
  #interest;
  constructor(interest) {
    super();
    this.#interest = interest / 100;
  }
  addInterest() {
    const balance = this.balance;
    const interestAmount = this.#interest * balance;
    this.deposit(interestAmount);
  }
}
class CheckingAccount extends BankAccount {
  #fee;
  constructor(fee) {
    super();
    this.#fee = fee;
  }
  withdraw(amount) {
    super.withdraw(amount + this.#fee);
  }
}
  
const mySavingAccount = new SavingsAccount(10);
mySavingAccount.deposit(100);
mySavingAccount.addInterest();
console.log(`mySavingAccount.balance: ${mySavingAccount.balance}`);
mySavingAccount.addInterest();
console.log(`mySavingAccount.balance: ${mySavingAccount.balance}`);

const checkingAccount = new CheckingAccount(3);
checkingAccount.deposit(100);
console.log(`checkingAccount.balance: ${checkingAccount.balance}`);
checkingAccount.withdraw(10);
console.log(`checkingAccount.balance: ${checkingAccount.balance}`);
printSeparator("*");


// # 11
console.log("+----------------------------+");
console.log("|         mySavingAccount    |        +-------------------------------+");
console.log("|         ---------------    |        |   SavingsAccount.prototype    |");
console.log("| [[Prototype]] = -----------+-------->---------------------------    |");
console.log("|                            |        |   [[Prototype]] =  -----------+----------+");
console.log("|      #balance = 100        |        |                               |          |");
console.log("|     #interest = 10         |        |     addInterest = function    |          |");
console.log("|                            |        |                               |          |");
console.log("+----------------------------+        +-------------------------------+          |");
console.log("                                                                                 |");
console.log("                                                                                 |");
console.log("+-----------------------------+      +-------------------------------+           |");
console.log("|       myCheckingAccount     |      |                               |           |");
console.log("|       -----------------     |      |   CheckingAccount.prototype   |           |");
console.log("| [[Prototype]] = ------------+------>----------------------------   |           |");
console.log("|                             |      |    [[Prototype]] = -----------+-------+   |");
console.log("|      #balance = 100         |      |                               |       |   |");
console.log("|          #fee = 3           |      |         withdraw = function   |       |   |");
console.log("|                             |      |                               |       |   |");
console.log("+-----------------------------+      +-------------------------------+       |   |");
console.log("                                                                             |   |");
console.log("                                 v                                           |   |");
console.log("                                                                             |   |");
console.log("                                                                             |   |");
console.log("                                     +-------------------------------+       |   |");
console.log("                                     |     BankAccount.prototype     <-------+---+");
console.log("                                     |     ---------------------     |");
console.log("                                     |  [[Prototype]] = -------------+-----------+");
console.log("                                     |                               |           |");
console.log("                                     |        deposit = function     |           |");
console.log("                                     |                               |           |");
console.log("                                     |       withdraw = function     |           |");
console.log("                                     |                               |           |");
console.log("                                     +-------------------------------+           |");
console.log("                                                                                 |");
console.log("                                                                                 |");
console.log("                                                                                 |");
console.log("                                     +--------------------------------+          |");
console.log("                                     |                                |          |");
console.log("                                     |          Object.prototype      <----------+");
console.log("                                     |     ---------------------      |");
console.log("                                     |  [[Prototype]] = null          |");
console.log("                                     |                                |");
console.log("                                     +--------------------------------+");
printSeparator("*");

// # 12
// It doesn't work because "this" refer to windows when the listener is called.
// const button = document.getElementById('button1');
// button.addEventListener('click', event => {
//   event.target.classList.toggle('clicked');
// });


// # 13
const harrysAccount = new BankAccount();
const action = harrysAccount.deposit.bind(harrysAccount);
action(1000)
console.log(`harrysAccount.balance: ${harrysAccount.balance}`);
printSeparator("*");

// # 14
function invokeLater(f, delay) {
  setTimeout(() => f(delay), delay);
}
function depositInto(account) {
  return function(amount) {
    account.deposit(amount);
  };
}
const sallysAccount = new BankAccount();
invokeLater(depositInto(sallysAccount), 1000);
console.log(`sallysAccount.balance: ${sallysAccount.balance}`);
setTimeout(() => console.log(`sallysAccount.balance: ${sallysAccount.balance}`), 2000);
