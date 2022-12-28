# Chapter 06 - Exercises

1. Write a function that, given a string, produces an escaped string delimited
by ' characters. Turn all non-ASCII Unicode into ``\u{. . .}``. Produce 
escapes ``\b``, ``\f``, ``\n``, ``\r``, ``\t``, ``\v``, ``\'``, ``\\``.


2. Write a function that fits a string into a given number of Unicode 
characters. If it is too long, trim it and append an ellipsis ``...`` 
(``\u{2026}``). Be sure to correctly handle characters that are encoded with
two UTF-16 code units.


3. The ``substring`` and ``slice`` methods are very tolerant of bad arguments.
 Can you get them to yield an error with any arguments? Try strings, objects,
array, no arguments.


4. Write a function that accepts a string and returns an array of all
substrings. Be careful about characters that are encoded with two UTF-16 code
units.


5. In a more perfect world, all string methods would take offsets that count
Unicode characters, not UTF-16 code units. Which ``String`` methods would be
affected? Provide replacement functions for them, such as 
``indexOf(str, sub)`` and ``slice(str, start, end)``.


6. Implement a ``printf`` tagged template function that formats integers,
 floating-point numbers, and strings with the classic ``printf`` formatting
instructions, placed after embedded expressions:
```js
    const formatted = printf`${item}%-40s | ${quantity}%6d | ${price}%10.2f`
```


7. Write a tagged template function ``spy`` that displays both the raw and
"cooked" string fragments and the embedded expression values. In the raw
string fragments, remove the backslashes that were needed for escaping
backticks, dollar signs, and backslashes.


8. List as many different ways as you can to produce a regular expression that
matches only the empty string.


9. Is the ``m/multiline`` flag actually useful? Couldn’t you just match 
``\n``? Produce a regular expression that can find all lines containing just
digits without the multiline flag. What about the last line?


10. Produce regular expressions for email addresses and URLs.


11. Produce regular expressions for US and international telephone numbers.


12. Use regular expression replacement to clean up phone numbers and credit
card numbers.


13. Produce a regular expression for quoted text, where the delimiters could
be matching single or double quotes, or curly quotes ``“”``.


14. Produce a regular expression for image URLs in an HTML document.


15. Using a regular expression, extract all decimal integers (including
negative ones) from a string into an array.


16. Suppose you have a regular expression and you want to use it for a 
complete match, not just a match of a substring. You just want to surround
it with ``^`` and ``$``. But that's not so easy. The regular expression needs
to be properly escaped before adding those anchors. Write a function that 
accepts a regular expression and yields a regular expression with the anchors
added.


17. Use the ``replace`` method of the ``String`` class with a function
argument to replace all °F measurements in a string with their °C equivalents.


18. Enhance the ``greek`` function of Section 6.5, "Raw Template Literals"
(page 122), so that it handles escaped backslashes and ``$`` symbols. Also
check whether a symbol starting with a backslash has a substitution. If not,
include it verbatim.


19. Generalize the ``greek`` function of the preceding exercise to a general
purpose substitution function that can be called as ``subst(dictionary)`templateString` ``.
