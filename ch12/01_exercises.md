# Chapter 12 - Exercises

1. Implement a function that receives an iterable value and prints every other
   element.


2. Implement a function that receives an iterable value and returns another
   iterable value that yields every other element.


3. Implement an iterable value that yields an infinite number of die tosses,
   random integers between 1 and 6. Write it in a single line:
   ```js
        const dieTosses = { . . . }
   ```

4. Write a function ``dieTosses(n)`` that returns an iterable yielding ``n``
   random integers between ``1`` and ``6``.


5. What is wrong with this implementation of a ``Range`` iterator?
   ```js
        class Range {
            constructor(start, end) {
                this.start = start
                this.end = end
            }
            [Symbol.iterator]() {
                let current = this.start
                return {
                    next() {
                        current++
                        return current <= this.end ? { value: current - 1 } : { done: true }
                    }
                }
            }
        }
   ```


6. Complete the implementation of the file iterator in Section 12.3,
   "Closeable Iterators" (page 252). Use the ``openSync``, ``readSync``, and
   ``closeSync`` methods of the Node.js ``fs`` module
   (https://nodejs.org/api/fs.html). Note that you need to close the file in
   both the ``next`` and the ``return`` functions. You can avoid the code
   duplication by calling ``return`` from ``next``.


7. Change the arrayGenerator function of Section 12.5, "Nested Yield" (page
   255), so that for array elements that are strings, each character is
   yielded separately.


8. Enhance the preceding exercise so that the values of any iterable array
   element are yielded separately.


9. Using a generator, produce a tree iterator that visits the nodes of a tree
   one at a time. If you are familiar with the DOM API, visit the nodes of a
   DOM document. Otherwise, make your own tree class.


10. Using a generator and Heap’s algorithm
    (https://en.wikipedia.org/wiki/Heap%27s_algorithm), produce an iterator
    that yields all permutations of an array. For example, if the array has
    values ``[1, 2, 3]``, your iterator should produce
    ``[1, 2, 3],[1, 3, 2],[2, 3, 1],[2, 1, 3],[3, 1, 2]``, and ``[3, 2, 1]``
    (not necessarily in this order).


11. How can you make the ``return`` method of a generator object return a
    value? Would you ever want to?


12. Section 12.6, "Generators as Consumers" (page 257), lists a number of
    different scenarios for the behavior of the ``throw method``. Make a table
    that summarizes each scenario and the expected behavior. Provide brief
    programs to demonstrate the behavior in each scenario.


13. Write a function ``trueRandomSum(n, handler)`` that computes the sum of
    ``n`` random numbers and passes it to the given handler. Use a generator,
    following Section 12.6, "Generators as Consumers" (page 257).


14. Repeat the preceding exercise without using a generator.


15. Consider this async function:
    ```js
        const putTwoImages = async (url1, url2, element) => {
            const img1 = await loadImage(url1)
            element.appendChild(img1)
            const img2 = await loadImage(url2)
            element.appendChild(img2)
            return element
        }
    ```
    And now consider this generator function yielding promises:
    ```js
        function* putTwoImagesGen(url1, url2, element) {
            const img1 = yield loadImage(url1)
            element.appendChild(img1)
            const img2 = yield loadImage(url2)
            element.appendChild(img2)
            return element
        }
    ```
    This is essentially the transformation that the JavaScript compiler does
    for any ``async`` function. Now fill in the ___ to complete a function
    ``genToPromise`` that takes an arbitrary generator yielding promises and
    turns it into a ``Promise``:
    ```js
        const genToPromise = gen => {
            const iter = gen()
            const nextPromise = arg => {
                const result = ___
                if (result.done) {
                    return Promise.resolve(___)
                } else {
                    return Promise.resolve(___).then(___)
                }
            }
            return nextPromise()
        }
    ```


16. Use the iterator returned from the ``loadHanafudaImages`` generator
    function in Section 12.8, "Async Generators and Iterators" (page 261), to
    add all images to a DOM element. Do not use a ``for await of`` loop.


17. Implement the ``TimedRange`` class from Section 12.8, "Async Generators
    and Iterators" (page 261), without using a generator function. Produce the
    promise-yielding iterator by hand.


18. One plausible use of the ``for await of`` loop is with ``Promise.all``.
    Suppose you have an array of image URLs. Turn them into an array of promises:
    ```js
        const imgPromises = urls.map(loadImage)
    ```
    Run them in parallel, await the resulting promise, and iterate over the
    responses. Which of the four loops below run without errors? Which one
    should you use?
    ```js
        for (const img of Promise.all(imgPromises))
            element.appendChild(img)

        for await (const img of Promise.all(imgPromises))
            element.appendChild(img)

        for (const img of await Promise.all(imgPromises))
            element.appendChild(img)

        for await (const img of await Promise.all(imgPromises))
            element.appendChild(img)
    ```


19. Which of these loops run without errors? For those that do, how does their behavior differ from those of the preceding exercise?
    ```js
        for (const p of urls.map(loadImage))
            p.then(img => element.appendChild(img))

        for (const p of urls.map(async url => await loadImage(url)))
            element.appendChild(await p)

        for await (const img of urls.map(url => await loadImage(url)))
            element.appendChild(img)

        for (const img of await urls.map(loadImage))
            element.appendChild(img)

        for await (const img of await urls.map(loadImage))
            element.appendChild(img)
    ```


20. Some APIs (such as the GitHub API described at
    https://developer.github.com/v3/guides/traversing-with-pagination) yield
    paged results with a slightly different mechanism than that of the example
    in Section 12.8, "Async Generators and Iterators" (page 261). The ``Link``
    header of each response contains a URL to navigate to the next result. You
    can retrieve it as:
    ```js
        let nextURL
          = response.headers.get('Link').match(/<(?<next>.*?)>; rel="next"/).groups.next;
    ```
    Adapt the ``loadResults`` generator function to this mechanism.
    
    Extra credit if you can demystify the regular expression.
