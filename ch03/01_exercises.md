# Chapter 03 - Exercises


1. What does the ``indexOf`` function of Section 3.1, "Declaring Functions"
   (page 51), do when an object is passed instead of an array?


2. Rewrite the ``indexOf`` function of Section 3.1, "Declaring Functions" 
   (page 51), so that it has a single return at the end.


3. Write a function ``values(f, low, high)`` that yields an array of function
   values ``[f(low), f(low + 1), . . ., f(high)]``.


4. The ``sort`` method for arrays can take an argument that is a comparison
   function with two parameters—say, ``x`` and ``y`` . The function returns a
   negative integer if ``x`` should come before ``y`` , zero if ``x`` and 
   ``y`` are indistinguishable, and a positive integer if ``x`` should come 
   after ``y`` . Write calls, using arrow functions, that sort:

   * An array of positive integers by decreasing order
   * An array of people by increasing age
   * An array of strings by increasing length


5. Using the "hard objects" technique of Section 3.7, "Hard Objects" 
   (page 59), implement a ``constructCounter`` method that produces counter
   objects whose ``count`` method increments a counter and yields the new 
   value. The initial value and an optional increment are passed as 
   parameters. (The default increment is 1.)
    ```js
    const myFirstCounter = constructCounter(0, 2)
    console.log(myFirstCounter.count()) // 0
    console.log(myFirstCounter.count()) // 2
    ```


6. A programmer thinks that "named parameters are almost implemented
   in JavaScript, but order still has precedence," offering the following
   "evidence" in the browser console:
    ```js
    function f(a=1, b=2){ console.log(`a=${a}, b=${b}`) }
    f() // a=1, b=2
    f(a=5) // a=5, b=2
    f(a=7, b=10) // a=7, b=10
    f(b=10, a=7) // Order is required: a=10, b=7
    ```
   What is actually going on? (Hint: It has nothing to do with named
   parameters. Try it in strict mode.)


7. Write a function ``average`` that computes the average of an arbitrary
   sequence of numbers, using a rest parameter.


8. What happens when you pass a string argument to a rest parameter
   ``...str ?`` Come up with a useful example to take advantage of your
   observation.


9. Complete the ``mkString`` function of Section 3.13, “Simulating Named
   Arguments with Destructuring” (page 66).


10. The archaic ``var`` keyword interacts poorly with closures. Consider this
    example:
    ```js
    for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1000 * i)
    }
    ```
    What does this code snippet print? Why? (Hint: What is the scope of
    the variable ``i`` ?) What simple change can you make to the code to print
    the numbers 0, 1, 2, . . . , 9 instead?


11. Consider this declaration of the factorial function:
    ```js
    const fac = n => n > 1 ? n * fac(n - 1) : 1
    ```
    Explain why this only works because of variable hoisting.


12. In sloppy (non-strict) mode, functions can be declared inside a nested
    block, and they are hoisted to the enclosing function or script. Try out
    the following example a few times:
    ```js
    if (Math.random() < 0.5) {
    say('Hello')
    function say(greeting) { console.log(`${greeting}!`) }
    }
    say('Goodbye')
    ```
    Depending on the result of ``Math.random``, what is the outcome? What is
    the scope of ``say``? When is it initialized? What happens when you
    activate strict mode?


13. Implement an ``average`` function that throws an exception if any of its
    arguments is not a number.


14. Some programmers are confused by statements that contain all three of
    ``try``/``catch``/``finally`` because there are so many possible pathways
    of control. Show how you can always rewrite such a statement using a 
    ``try``/``catch`` statement and a ``try``/``finally`` statement.
