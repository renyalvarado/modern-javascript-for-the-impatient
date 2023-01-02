# Chapter 13 - Exercises

1. What do the following types describe?
   ```typescript
        (number | string)[]
        number[] | string[]
        [[number, string]]
        [number, string, ...:number[]]
        [number, string, ...:(number | string)[]]
        [number, ...: string[]] | [string, ...: number[]]
   ```


2. Investigate the difference between functions with return type ``void`` and
   return type ``undefined``. Can a function returning void have any return
   statements? How about returning ``undefined`` or ``null``? Must a function
   with return type ``undefined`` have a ``return`` statement, or can it
   implicitly return ``undefined``?


3. List all types of the functions of the ``Math`` class.


4. What is the difference between the types ``object``, ``Object``, and 
   ``{}``?


5. Describe the difference between the types
   ```typescript
        type MaybeColoredPoint = {
            x: number,
            y: number,
            color?: string
        }
   ```
    and
   ```typescript
        type PerhapsColoredPoint = {
            x: number,
            y: number,
            color: string | undefined
        }
   ```


6. Given the type
   ```typescript
        type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
   ```
    is ``Weekday`` a subtype of string or the other way around?


7. What is the subtype relationship between ``number[]`` and ``unknown[]``?
   Between ``{ x: number, y: number }`` and
   ``{ x: number | undefined, y: number | undefined }``? Between
   ``{ x: number, y: number }`` and ``{ x: number, y: number, z: number }``?


8. What is the subtype relationship between ``(arg: number) => void`` and
   ``(arg: number | undefined) => void``? Between ``() => unknown`` and
   ``() => number``? Between ``() => number`` and ``(number) => void``?


9. What is the subtype relationship between ``(arg1: number) => number`` and
   ``(arg1: number, arg2?: number) => number``?


10. Implement the function
    ```typescript
        const act = (x: { bark(): void } | { meow(): void }) => . . .
    ```
    that invokes either ``bark`` or ``meow`` on ``x``. Use the ``in`` operator
    to distinguish between the alternatives.


11. Show that object covariance is unsound. Use the types
    ```typescript
        type Colored = { color: string }
        type MaybeColored = { color: string | undefined }
    ```
    As with arrays in Section 13.7.3, "Array and Object Type Variance" (page
    282), define two variables, one of each type, both referring to the same
    value. Create a situation that shows a hole in the type checker by
    modifying the ``color`` property of one of the variables and reading the
    property with the other variable.


12. In Section 13.11, "Indexed Properties" (page 290), you saw that it is
    impossible to declare
    ```typescript
        type Dictionary = {
        created: Date, // Error—not a string or string[] [arg: string]: string | string[]
        }
    ```
    Can you overcome this problem with an intersection type?


13. Consider this type from Section 13.11, “Indexed Properties” (page 290):
    ```typescript
        type ShoppingList = {
            created: Date,
            [arg: number] : string
        }
    ```
    Why does the following code fail?
    ```typescript
        const list: ShoppingList = {
            created: new Date()
        }
        list[0] = 'eggs'
        const more = ['ham', 'hash browns']
        for (let i in arr)
            list[i + 1] = arr[i]
    ```
    Why does this code not fail?
    ```typescript
        for (let i in arr)
            list[i] = arr[i]
    ```


14. Give an example of supertype/subtype pairs for each of the rows of Table
    13-1 that is different from those given in the table. For each pair,
    demonstrate that a supertype variable can hold a subtype instance.


15. The generic ``Pair<T>`` class from Section 13.13.5, "Generic Type
    Variance" (page 302), is covariant in ``T``. Show that this is unsound.
    As with arrays in Section 13.7.3, "Array and Object Type Variance" (page
    282), define two variables, one of type ``Pair<Person>`` and of type
    ``Pair<Employee>``, both referring to the same value. Mutate the value
    through one of the variables so that you can produce a runtime error by
    reading from the other variable.

16. Complete the generic function
    ```typescript
        const last = <. . .> (values: T) => values[values.length - 1]
    ```
    so that you can call:
    ```typescript
        const str = 'Hello'
        console.log(last(str))
        console.log(last([1, 2, 3]))
        console.log(last(new Int32Array(1024)))
    ```
    Hint: Require that ``T`` has a ``length`` property and an indexed
    property. What is the return type of the indexed property?
