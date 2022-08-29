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
};
