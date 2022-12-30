# Chapter 11 - Exercises

1. Why is the ``Symbol.toPrimitive`` method for the Percent class in Section
   11.2, "Customization with Symbol Properties" (page 223), unsatisfactory?
   Try adding and multiplying percent values. Why can’t you provide a fix that
   works both for percent arithmetic and string concatenation?


2. A "glob pattern" is a pattern for matching file names. In its simplest
   form, * matches any sequence of characters other than the ``/`` path
   separator, and ? matches a single character. Implement a class ``Glob``.
   Using well-known symbols, enable the use of glob pattern for the string
   methods ``match``, ``matchAll``, ``replace``, ``search``, and ``split``.


3. As described in Table 11-1, you can change the behavior of x ``instanceof``
   y by ensuring that y has a well-known symbol property. Make it so that
   ``x instanceof Natural`` checks whether ``x`` is an integer ≥ 0, and
   ``x instanceof Range(a, b)`` checks if ``x`` is an integer in the given
   range. I am not saying this is a good idea, but it is interesting that it
   can be done.


4. Define a class ``Person`` so that for it and any subclasses, the
   ``toString`` method returns ``[object Classname]``.


5. Look at the output of the following calls and explain the results:
   ```js
      Object.getOwnPropertyDescriptors([1,2,3])
      Object.getOwnPropertyDescriptors([1,2,3].constructor)
      Object.getOwnPropertyDescriptors([1,2,3].prototype)
   ```

6. Suppose you seal an object by calling ``Object.seal(obj)``. Trying to set a
   nonexistent property throws an exception in strict mode. But you can still
   read nonexistent properties without an exception. Write a function
   ``reallySeal`` so that reading or writing nonexistent properties on the
   returned object throws an exception. Hint: Proxies.


7. Google for "JavaScript object clone" and review a few blog articles and
   StackOverflow answers. How many of them work correctly with shared mutable
   state and circular references?


8. Write a function ``freezeCompletely`` that freezes an object and
   recursively all of its property values. Handle cyclic dependencies.


9. Using ``Object.getOwnPropertyDescriptors``, find all properties of the
   array ``[1, 2, 3]``, the ``Array function``, and of ``Array.prototype``.
   Why do all three have a ``length`` property?


10. Construct a new string object as ``new String('Fred')`` and set its
    prototype to ``Array.prototype``. Which methods can you successfully apply
    to the object? Start by trying ``map`` and ``reverse``.


11. The ``new.target`` expression, introduced in the note at the end of
    Section 11.10, "Function Properties" (page 235), is set to the constructor
    function when an object is constructed with the ``new`` operator. Make use
    of this feature by designing an abstract class ``Person`` that cannot be
    instantiated with ``new``. However, allow instantiation of concrete
    subclasses such as ``Employee``.


12. How can one enforce abstract classes with the ``constructor`` property of
    the prototype instead of the technique of the preceding exercise? Which is
    more robust?


13. The ``new.target`` expression is ``undefined`` if a function is called
    without ``new``. What is an easier way of determining this situation in
    strict mode?


14. Explore the ``name`` property of functions. What is it set to when the
    function is defined with a name? Without a name but assigned to a local
    variable? What about anonymous functions that are passed as arguments or
    returned as function results? What about arrow expressions?


15. In Section 11.11, "Binding Arguments and Invoking Methods" (page 236), you
    saw that call is necessary to invoke a method from a different class.
    Provide a similar example for ``bind``.


16. In this exercise, you will explore how JavaScript programmers had to
    implement inheritance before the ``extends`` and ``super`` keywords. You
    are given a constructor function
    ```js
      function Employee(name, salary) {
         this.name = name
         this.salary = salary
      }
    ```
    Methods are added to the prototype.
    ```js
      Employee.prototype.raiseSalary = function(percent) {
         this.salary *= 1 + percent / 100
      }
    ```
    Now implement a ``Manager`` subclass without using the ``extends`` and
    ``super`` keywords. Use ``Object.setPrototypeOf`` to set the prototype of
    ``Manager.prototype``. In the ``Manager`` constructor, you need to invoke
    the ``Employee`` constructor on the *existing* ``this`` object instead of
    creating a new one. Use the ``bind`` method described in Section 11.11,
    "Binding Arguments and Invoking Methods" (page 236).


17. Attempting to solve the preceding exercise, Fritzi sets
    ```js
      Manager.prototype = Employee.prototype
    ```
    instead of using ``Object.setPrototypeOf``. What are the unhappy results
    of this decision?


18. As noted at the end of Section 11.8, "Accessing and Updating the
    Prototype" (page 231), ``Array.prototype`` is actually an array. Verify
    this with ``Array.isArray``. Why is ``[] instanceof Array`` false? What
    happens to arrays if you add elements to the ``Array.prototype`` array?


19. Use the logging proxy from Section 11.12, "Proxies" (page 237), to monitor
    reading and writing of array elements. What happens when you read or write
    an element? The length property? What happens if you inspect the proxy
    object in the console by typing its name?

20. Isn't it annoying when one misspells the name of a property or method?
    Using a proxy, implement autocorrect. Pick the closest existing name. You
    need to use some measure of closeness for strings, such as the number of
    common characters or the Levenshtein edit distance.


21. It is possible to change the behavior of objects, arrays, or strings by
    overriding methods of the ``Object``, ``Array``, or ``String`` class.
    Implement a proxy that disallows such overrides.


22. An expression ``obj.prop1.prop2.prop3`` will throw an exception if any of
    the intermediate properties yield ``null`` or ``undefined``. Let's solve
    that nuisance with proxies. First, define a safe object that returns
    itself when looking up any property. Next, define a function so that
    ``safe(obj)`` is a proxy for ``obj`` that returns the safe object when
    looking up any property whose value is ``null`` or ``undefined``. Extra
    credit if you can extend this technique to method calls so that
    ``safe(obj).m1().m2().m3()`` doesn’t throw an exception if any of the
    intermediate methods return ``null`` or ``undefined``.


23. Create a proxy that supports an XPath-like syntax for finding elements in
    an HTML or XML document.
    ```js
      const root = makeRootProxy(document)
      const firstItemInSecondList = root.html.body.ul[2].li[1]
    ```


24. Make a revocable proxy, as described in Section 11.12, "Proxies" (page
    237), that makes all properties read-only until access is revoked
    entirely.


25. In Section 11.14, "Proxy Invariants" (page 242), the
    ``getOwnPropertyDescriptor`` trap returns a descriptor for index
    properties whose ``configurable`` attribute is ``true``. What happens if
    you set it to ``false``?


26. Debug the ``ownKeys`` trap in Section 11.14, "Proxy Invariants" (page
    242), by logging the calls to the ``{}`` target, using the
    ``logEverything`` method of Section 11.13, "The Reflect Class" (page 240).
    Also place a logging call into the ``getOwnPropertyDescriptor`` trap. Now
    read through Section 9.5.11 of the ECMAScript 2020 standard. Does the
    implementation follow the algorithm of the standard?


27. Add traps to the range proxy in Section 11.14, "Proxy Invariants" (page
    242) to prevent deleting or modifying the index properties. Also add a
    ``has`` trap.


28. Add a ``length`` property and a ``toString`` method to the range proxy in
    Section 11.14, “Proxy Invariants” (page 242). Add it to the proxy target
    and don't provide special handling in the traps. Provide appropriate
    attributes.


29. The range proxy in Section 11.14, "Proxy Invariants" (page 242), is
    instantiated by calling the ``createRange`` function. Use a constructor
    function so that a user can call ``new Range(10, 100)`` and get a proxy
    instance that looks as if it was an instance of a ``Range`` class.


30. Continue the preceding exercise so that the ``Range`` class extends
    ``Array``. Be sure to set the ``Symbol.species`` property, as described in
    Section 11.2.3, "Species" (page 225).
