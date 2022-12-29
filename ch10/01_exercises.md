# Chapter 10 - Exercises

1. Find a JavaScript library for statistical computation (such as
   ``https://github.com /simple-statistics/simple-statistics``). Write a
   program that imports the library as an ECMAScript module and computes the
   mean and standard deviation of a data set.


2. Find a JavaScript library for encryption (such as
   ``https://github.com/brix /crypto-js``). Write a program that imports the
   library as an ECMAScript module and encrypts a message, then decrypts it.


3. Implement a simple logging module that supports logging messages whose log
   level exceeds a given threshold. Export a log function, constants for the
   log level, and a function to set the threshold.


4. Repeat the preceding exercise, but export a single class as a default
   feature.


5. Implement a simple encryption module that uses the Caesar cipher (adding a
   constant to each code point). Use the logging module from one of the
   preceding exercises to log all calls to ``decrypt``.


6. As an example of a circular dependency between modules, repeat the
   preceding exercise, but provide an option to encrypt the logs in the
   logging module.


7. Implement a simple module that provides random integers, arrays of random
   integers, and random strings. Use as many different forms of the ``export``
   syntax as you can.


8. What is the difference between
   ```js
      import Cipher from './modules/caesar.mjs'
   ```
   and
   ```js
      import { Cipher } from './modules/caesar.mjs'
   ```

9. Explain the difference between
   ```js
      export { encrypt, Cipher, DEFAULT_KEY }
   ```
   and
   ```js
      export default { encrypt, Cipher, DEFAULT_KEY }
   ```


10. Which of the following are valid JavaScript?
    ```js
      export function default(s, key) { . . . }
      export default function (s, key) { . . . }
      export const default = (s, key) => { . . . }
      export default (s, key) => { . . . }
    ```


11. Trees have two kinds of nodes: those with children (parents) and those
    without (leaves). Let’s model that with inheritance:
    ```js
      class Node {
         static from(value, ...children) {
            return children.length === 0 ? new Leaf(value)
               : new Parent(value, children)
         } 
      }

      class Parent extends Node {
         constructor(value, children) {
            super()
            this.value = value this.children = children
         }
         depth() {
         return 1 + Math.max(...this.children.map(c => c.depth()))
         }
      }

      class Leaf extends Node {
         constructor(value) {
            super()
            this.value = value
         }
         depth() {
            return 1
         }
      }
    ```
    Now a module-happy developer wants to put each class into a separate
    module. Do that and try it out with a demo program:
    ```js
      import { Node } from './node.mjs'

      const myTree = Node.from('Adam',
         Node.from('Cain', Node.from('Enoch')),
         Node.from('Abel'),
         Node.from('Seth', Node.from('Enos')))
      console.log(myTree.depth())
    ```
    What happens? Why?

12. Of course, the issue in the preceding exercise could have been easily
    avoided by not using inheritance, or by placing all classes into one
    module. In a larger system, those alternatives may not be feasible. In
    this exercise, keep each class in its own module and provide a façade
    module tree.mjs that reexports all three modules. In all modules, import
    from ``'./tree.mjs'``, not the individual modules. Why does this solve the
    issue?
