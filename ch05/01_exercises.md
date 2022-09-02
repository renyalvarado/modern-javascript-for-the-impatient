# Chapter 05 - Exercises

1. The values ``0`` and ``-0`` are distinct in the IEEE 754 standard. Provide 
at least two distinct implementations of a function ``plusMinusZero(x)`` that
returns ``+1`` if ``x`` is ``0``, ``-1`` if ``x`` is ``-0``, and ``0``
otherwise. Hints: ``Object.is``, ``1/-0``.


2. There are three kinds of IEEE 754 "double precision" floating-point values:

* "Normalized" values of the form ±1.m × 2<sup>e</sup>, where m has 52 bits 
and e ranges from -1022 to 1023
* ±0 and "denormalized" values close to zero, of the form ±0.m × 2−1022, where
m has 52 bits
* Special values ±∞, NaN

    Write a function that produces a string *'normalized'*, *'denormalized'*,
    or *'special'* for a given floating-point number.


3. Suppose the number ``x``, when shown in exponential format, has an exponent
of ``e``. Give a condition depending on ``e`` and ``p`` under which the call
``x.toPrecision(p)`` shows the result in fixed format.


4. Write a function that formats a numeric value according to a 
``printf``-style specification. For example, ``format(42, "%04x")`` should
print ``002A``.


5. Write a function that yields the exponent of a floating-point number—that
is, the value that would be printed after ``e`` in exponential notation. Use
binary search, and don’t call any ``Math`` or ``Number`` methods.


6. Explain the values for ``Number.MAX_VALUE``, ``Number.MIN_VALUE``, and 
``Number.EPSILON`` given in Section 5.4, "Number Functions and Constants"
(page 102).


7. Write a function that computes the smallest representable floating-point
number after a given integer ``n``. Hint: What is the smallest representable
number after 1? After 2? After 3? After 4? You may want to consult an
article describing the IEEE floating-point representation. Extra credit if
you can obtain the result for an arbitrary number.


8. Produce a big integer with the digit 3 repeated a thousand times, using 
no loops or recursion, in a single line of code that is no more than 80 
characters long.


9. Write a function that converts a ``Date`` object into an object with 
properties ``year``, ``month``, ``day``, ``weekday``, ``hours``, ``minutes``,
``seconds``, ``millis``.


10. Write a function that determines how many hours a user is away from UTC.


11. Write a function that determines whether a year is a leap year. Provide
two different implementations.


12. Write a function that yields the weekday of a given day without calling
the ``Date.getUTCDay/getDay`` methods. Hint: The epoch fell on a Thursday.


13. Write a function that, given a month and year (which should default to
the current month and year), prints a calendar such as:
<pre>
       1  2  3  4  5
 6  7  8  9 10 11 12
13 14 15 16 17 18 19
20 21 22 23 24 25 26
27 28 29 30 31
</pre>


14. Write a function with two ``Date`` parameters that yields the number of
days between the dates, with the fractional part indicating the fraction of
the day.


15. Write a function with two ``Date`` parameters that yields the number of
years between the dates. This is more complex than the preceding problem
because years have varying lengths.


16. Suppose you are given this deadline and you need to move it to February 1:
    ```
    const deadline = new Date(Date.UTC(2020, 0 /* January */, 31))
    ```
    What is the result of
    ```
    deadline.setUTCMonth(1 /* February */)
    deadline.setUTCDate(1)
    ```
    Perhaps one should always call ``setUTCDate`` before ``setUTCMonth``? Give
    an example where that doesn’t work.


17. Experiment which strings are accepted by ``Date.parse(dateString)`` or 
``new Date(dateString)`` in your favorite JavaScript runtime. Examples to try:

    The string returned by ``Date()``
    ```
    '3/14/2020'
    'March 14, 2020'
    '14 March 2020'
    '2020-03-14'
    '2020-03-14 '
    ```
    Scarily, the last two strings yield *different* dates in Node.js version 13.11.0.
