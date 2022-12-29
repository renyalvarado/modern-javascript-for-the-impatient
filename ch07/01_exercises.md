# Chapter 07 - Exercises

1. Implement a function that works exactly like the ``from`` function of the
   ``Array`` class. Pay careful attention to missing elements. What happens
   with objects that have keys whose numeric values are ``≥`` the ``length``
   property? With properties that are not index properties?


2. The ``Array.of`` method was designed for a very specific use case: to be
   passed as a "collector" to a function that produces a sequence of values
   and sends them to some destination—perhaps printing them, summing them, or
   collecting them in an array. Implement such a function:
   ```js
    mapCollect(values, f, collector)
   ```
   The function should apply ``f`` to all values and then send the result to
   the collector, a function with a variable number of arguments. Return the
   resultof the collector.

   Explain the advantage of using ``Array.of`` over ``Array`` (i.e., 
    ``(...elements) => new Array(...elements))`` in this context.


3. An array can have properties whose numeric values are negative integers,
   such as '-1'. Do they affect the length? How can you iterate over them in
   order?


4. Google for "JavaScript forEach thisArg" to find blog articles explaining
   the ``thisArg`` parameter of the ``forEach`` method. Rewrite the examples
   without using the ``thisArg`` parameter. If you find a call such as
   ```js
    arr.forEach(function() { . . . this.something() . . . }, thisArg)
   ```
   where ``thisArg`` is ``this``, replace the function with an arrow function.
   Otherwise, replace the inner ``this`` with whatever ``thisArg`` is. If the
   call has the form
   ```js
    arr.forEach(method, thisArg)
   ```
   use an arrow function invoking ``thisArg.method(. . .)``. Can you come up
   with any situation where ``thisArg`` is required?


5. If you do not supply a comparison function in the ``sort`` method of the
   ``Array`` class, then elements are converted to strings and
   lexicographically compared by UTF-16 code units. Why is this a terrible
   idea? Come up with arrays of integers or objects where the sort results are
   useless. What about characters above ``\u{FFFF}``?


6. Suppose an object representing a message has properties for dates and for
   senders. Sort an array of messages first by date, then by sender. Verify 
   that the ``sort`` method is stable: Messages with the same sender continue
   to be sorted by date after the second sort.


7. Suppose an object representing a person has properties for first and last
   names. Provide a comparison function that compares last names and then
   breaks the ties using first names.


8. Implement a comparison function that compares two strings by their Unicode
   code points, not their UTF-16 code units.


9. Write a function that yields all positions of a target value in an array.
   For example, ``indexOf(arr, 0)`` yields all array index values ``i`` where
   ``arr[i]`` is zero. Use ``map`` and ``filter``.


10. Write a function that yields all positions at which a given function is
    ``true``. For example, ``indexOf(arr, x => x > 0)`` yields all array index
    values ``i`` where ``arr[i]`` is positive.


11. Compute the spread (that is, the difference between maximum and minimum)
    of an array using ``reduce``.


12. Given an array of functions ``[f1, f2, . . . , fn]``, obtain the
    composition function ``x => f1(f2( . . . (fn(x)) . . . ))`` using
    ``reduceRight``.


13. Implement functions ``map``, ``filter``, ``forEach``, ``some``, ``every``
    for sets.


14. Implement functions ``union(set1, set2)``, ``intersection(set1, set2)``,
    ``difference(set1, set2)`` that yield the union, intersection, or
    difference of the sets, without mutating the arguments.


15. Write a function that constructs a ``Map`` from an object, so that you can
    easily construct a map as ``toMap({ Monday: 1, Tuesday: 2, . . . })``.


16. Suppose you use a ``Map`` whose keys are point objects of the form
    ``{ x:. . ., y:. . . }``. What can go wrong when you make queries such as
    ``map.get({ x: 0, y: 0 })``? What can you do to overcome that?


17. Show that weak sets really work as promised. Start Node.js with the flag
    ``--expose-gc``. Call ``process.memoryUsage()`` to find out how much of
    the heap is used. Allocate an object:
    ```js
        let fred = { name: 'Fred', image: new Int8Array(1024*1024) }
    ```
    Verify that the heap usage has gone up by about a megabyte. Set ``fred``
    to null, run the garbage collector by calling ``global.gc()``, and check
    that the object was collected. Now repeat, inserting the object into a
    weak set. Verify that the weak set allows the object to be collected.
    Repeat with a regular set and show that the object won’t be collected.


18. Write a function to find the endianness of host platform. Use an array
    buffer and view it both as a data view and a typed array.
