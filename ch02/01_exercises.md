# Chapter 02 - Exercises


1. Browser consoles and the Node.js REPL display values when you enter
   statements. What values are displayed for the following kinds of
   statements? 
   * An expression statement
   ```js
   7; // 7
   ```
   * A variable declaration
   ```js
   let x = 6; // undefined
   ```
   * A block statement with at least one statement inside
   ```js
   {;} // undefined
   ```
   * An empty block statement
   ```js
   if (true) {
   } // undefined
   ```
   * A `while` , `do` , or `for` loop whose body is executed at least once
   ```js
   while(true) {
    break;
   } // undefined
   ```
   * A loop whose body is never executed
   ```js
   while(false) {
   } // undefined
   ```
   * An `if` statement
   ```js
   if (true) {
   } // undefined
   ```
   * A `try` statement that completes normally
   ```js
   try {
   
   } catch(e) {
   
   } // undefined
   ```
   * A `try` statement whose `catch` clause is executed
   ```js
   try {
    throw new Error();
   } catch(e) {
   
   } // undefined
   ```


2. What is wrong with the statement
    ```js
    if (x === 0) console.log('zero') else console.log('nonzero')
    ```
   How do you fix the problem?

   **Answer:** `else` is an "offending token" but it's not separated from the
   other statement with a new line so the semicolon is not inserted 
   automatically:

   [ECMAScript Automatic Semicolon Insertion](https://codeburst.io/ecmascript-automatic-semicolon-insertion-50f09091e377)

   **Solution:** add manually a semicolon or put `else` and the rest of
   sentence in a new line.


3. Consider a statement
    ```js
   let x = a
    ```
   Which tokens could start the next line that prevent a semicolon to be
   inserted? Which ones can realistically occur in an actual program?

   **Answer:** `[]` and `()`, for example:
   ```js
   const a = () => 1
   let b = a
   (console.log("aa"))
   ```
    set `b` with value `1` instead of a reference to the function
    `() => 1`, because instead of inserting the semicolon, execute 
    the function.


4. What are the results of comparing `undefined` , `null` , `0`, and `''`
   values with the operators `< <= ==`? Why?

   ```js
   // MADNESS
   undefined < undefined // false
   undefined < null // false
   undefined < 0 // false
   undefined < '' // false
   undefined <= undefined // false
   undefined <= null // false
   undefined <= 0 // false
   undefined <= '' // false
   undefined == undefined // true
   undefined == null // true
   undefined == 0 // false
   undefined == '' // false
   
   null < undefined // false
   null < null // false
   null < 0 // false
   null < '' // false
   null <= undefined // false
   null <= null // true
   null <= 0 // true
   null <= '' // true
   null == undefined // true
   null == null // false
   null == 0 // false
   null == '' // false
   
   0 < undefined // false
   0 < null // false
   0 < 0 // false
   0 < '' // false
   0 <= undefined // false
   0 <= null // true
   0 <= 0 // true
   0 <= '' // true
   0 == undefined // false
   0 == null // false
   0 == 0 // true
   0 == '' // true
   
   '' < undefined // false
   '' < null // false
   '' < 0 // false
   '' < '' // false
   '' <= undefined // false
   '' <= null // true
   '' <= 0 // true
   '' <= '' // true
   '' == undefined // false
   '' == null // false
   '' == 0 // true
   '' == '' // true
   ```

5. Is `a || b` always the same as `a ? a : b`, no matter what type `a` and
   `b` are? Why or why not? Can you express `a && b` in a similar way?

    **Answer:**
   ```js
   !a ? a : b
   ```

6. Use the three kinds of `for` loop for finding the largest value in an 
   array of numbers.

   **Answer:** [answers.js](answers.js)

7. Consider this code snippet:
    ```js
   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   for (i in arr) { if (i + 1 === 10) console.log(a[i]) }
    ```
   Why doesn't it print anything?

   **Answer:** because `i` is `string` and `i + 1` concatenates string instead
   of add 1 as a number, so in the first iteration we got `"11"` instead `2`,
   and the code uses the `===` operator that also check the variables type.


8. Implement a `switch` statement that converts digits 0 through 9 to 
   their English names `'zero'` through `'nine'` . How can you do this 
   easily without a `switch` ? What about the reverse conversion?

   **Answer:** [answers.js](answers.js)


9. Suppose `n` is a number between 0 and 7 and you are supposed to set 
   the array elements `arr[k]` through `arr[k + n - 1]` to zero. Use a 
   `switch` with fallthrough.

10. Rewrite the `do` loop in Section 2.9, "`while` and `do` Loops" 
    (page 40), as a `while` loop.

    **Answer:** [answers.js](answers.js)


11. Rewrite all `for` loops in Section 2.10, "`for` Loops" (page 41), as 
    `while` loops.

    **Answer:** [answers.js](answers.js)


12. Rewrite the labeled `break` example in Section 2.11, "Breaking and
    Continuing" (page 44), to use two nested `for` loops.

    **Answer:** [answers.js](answers.js)


13. Rewrite the labeled `break` example in Section 2.11, "Breaking and
    Continuing" (page 44), without a `break` statement. Introduce a 
    Boolean variable to control the termination of the nested loops.

    **Answer:** [answers.js](answers.js)


14. Rewrite the `continue` example in Section 2.11, "Breaking and 
    Continuing" (page 44), without a `continue` statement.

    **Answer:** [answers.js](answers.js)


15. Consider the problem of finding the first position in which an
    array `b` occurs as a subsequence of an array `a`. Write two nested 
    loops:
     ```js
    let result = undefined
    for (let i = 0; i < a.length - b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i + j] != b[j]) . . .
        }
        . . .
    }
     ```
    Complete with labeled `break` or `continue`. Then rewrite without 
    `break` and `continue` statements. 

    **Answer:** [answers.js](answers.js)
