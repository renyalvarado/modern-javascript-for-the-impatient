# Chapter 04 - Exercises

1. Implement a function ``createPoint`` that creates a point in the plane with
a given ``x`` and ``y`` coordinates. Provide methods ``getX``, ``getY``,
``translate``, and ``scale``. The ``translate`` method moves the point by a 
given amount in ``x`` and ``y`` direction. The ``scale`` method scales both 
coordinates by a given factor. Use only the techniques of Section 4.1, 
"Methods" (page 77).


2. Repeat the preceding exercise, but now implement a constructor function
and use prototypes, as in Section 4.2, "Prototypes" (page 78).


3. Repeat the preceding exercise, but now use the ``class`` syntax.


4. Repeat the preceding exercise, but provide getters and setters for the ``x``
and ``y`` coordinates. In the setter, make sure the argument is a number.


5. Consider this function that makes a string "greetable" by adding a greet
method:
    ```js
    function createGreetable(str) {
        const result = new String(str)
        result.greet = function(greeting) { return `${greeting}, ${this}!` }
        return result
    }
    ```
    Typical usage:
    ```js
    const g = createGreetable('World')
    console.log(g.greet('Hello'))
    ```
    This function has a drawback: each greetable string has its own copy of the
    ``greet`` method. Have ``createGreetable`` yield an object whose prototype
    contains the greet method. Make sure that you can still invoke all string
    methods.


6. Provide a method ``withGreeter`` that adds the greet method to any 
``class``, yielding a new class:
    ```js
    const GreetableEmployee = withGreeter(Employee)
    const e = new GreetableEmployee('Harry Smith', 90000)
    console.log(e.greet('Hello'))
    ```
    Hint: Section 4.11, “Class Expressions” (page 91).


7. Rewrite the ``Employee`` class using private instance fields, as shown in
Section 4.6, "Instance Fields and Private Methods" (page 85).


8. A classic example for an abstract class is a tree node. There are two kinds
of nodes: those with children (parents) and those without (leaves).
    ```js
    class Node {
        depth() { throw Error("abstract method") }
    }
    class Parent extends Node {
        constructor(value, children) { . . . }
        depth() { return 1 + Math.max(...children.map(n => n.depth())) }
    }
    class Leaf extends Node {
        constructor(value) { . . . }
        depth() { return 1 }
    }
    ```
    This is how you would model tree nodes in Java or C++. But in JavaScript,
    you don’t need an abstract class to be able to invoke ``n.depth()``. 
    Rewrite the classes without inheritance and provide a test program.


9. Provide a class ``Random`` with static methods
    ```js
    Random.nextDouble(low, high)
    Random.nextInt(low, high)
    Random.nextElement(array)
    ```
    that produce a random number between ``low`` (inclusive) and ``high``
    (exclusive), or a random element from the given array.


10. Provide a class ``BankAccount`` and subclasses ``SavingsAccount`` and
``CheckingAccount``. A savings account has an instance field for the interest
and an ``addInterest`` method that adds it. A checking account charges a fee
for each withdrawal. Do not manipulate the superclass state directly but use
the superclass methods.


11. Draw a diagram of ``SavingsAccount`` and ``CheckingAccount`` objects from
the preceding exercise, similar to Figure 4-4.


12. Harry tries this code to toggle a CSS class when a button is clicked:
    ```js
    const button = document.getElementById('button1')
    button.addEventListener('click', function () {
        this.classList.toggle('clicked')
    })
    ```
    It doesn’t work. Why?
    Sally, after searching the wisdom of the Internet, suggests:
    ```js
    button.addEventListener('click', event => {
        event.target.classList.toggle('clicked')
    })
    ```
    This works, but Harry feels it is cheating a bit. What if the listener
    hadn’t produced the button as ``event.target``? Fix the code so that you
    use neither ``this`` nor the ``event`` parameter.


13. In Section 4.12, "The ``this`` Reference" (page 92), you saw that the
following doesn’t work:
    ```js
    const action = BankAccount.prototype.deposit
    action(1000)
    ```
    Can you make it work by getting the action method from an instance,
    like this:
    ```js
    const harrysAccount = new BankAccount()
    const action = harrysAccount.deposit
    action(1000)
    ```
    Why or why not?


14. In the preceding exercise, we defined an ``action`` function that deposits
money into ``harrysAccount``. It seemed a bit pointless, so let’s add some 
context. The function below invokes a given function after a delay, passing
the delay as an argument.
    ```js
    function invokeLater(f, delay) {
        setTimeout(() => f(delay), delay)
    }
    ```
    That’s perfect for Harry to earn $1000 after 1000 milliseconds:
    ```js
    invokeLater(amount => harrysAccount.deposit(amount), 1000)
    ```
    But what about Sally? Make a general function ``depositInto``so that one
    can call
    ```js
    invokeLater(depositInto(sallysAccount), 1000)
    ```
