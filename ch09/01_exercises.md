# Chapter 09 - Exercises

1. The sample program in Section 9.1, “Concurrent Tasks in JavaScript” (page
   185), may not load the images in the correct order. How can you modify it
   without using futures so that the images are always appended in the correct
   order, no matter when they arrive?


2. Implement a function ``invokeAfterDelay`` that yields a promise, invoking a
   given function after a given delay. Demonstrate by yielding a promise for a
   random number between 0 and 1. Print the result on the console when it is
   available.


3. Invoke the ``produceRandomAfterDelay`` function from the preceding exercise
   twice and print the sum once the summands are available.


4. Write a loop that invokes the ``produceRandomAfterDelay`` function from the
   preceding exercises ``n`` times and prints the sum once the summands are
   available.


5. Provide a function ``addImage(url, element)`` that is similar to that in
   Section 9.1, “Concurrent Tasks in JavaScript” (page 185). Return a promise
   so that one can chain the calls:
   ```js
      addImage('hanafuda/1-1.png')
         .then(() => addImage('hanafuda/1-2.png', imgdiv))
         .then(() => addImage('hanafuda/1-3.png', imgdiv))
         .then(() => addImage('hanafuda/1-4.png', imgdiv))
   ```
   Then use the tip in Section 9.5, “Promise Chaining” (page 192), to make the
   chaining more symmetrical.


6. Demonstrate that the ``Promise.resolve`` method turns any object with a
   ``then`` method into a ``Promise``. Supply an object whose then method
   randomly calls the resolve or reject handler.


7. Often, a client-side application needs to defer work until after
   the browser has finished loading the DOM. You can place such work into a
   listener for the ``DOMContentLoaded`` event. But if 
   ``document.readyState != 'loading'``, the loading has already happened, and
   the event won’t fire again. Capture both cases with a function yielding a
   promise, so that one can call
   ```js
      whenDOMContentLoaded().then(. . . )
   ```


8. Make an array of image URLs, some good, and some failing because of CORS
   (see the note at the end of Section 9.2, “Making Promises,” page 188). Turn
   each into a promise:
   ```js
      const urls = [. . .]
      const promises = urls.map(loadImage)
   ```
   Call ``allSettled`` on the array of promises. When that promise resolves,
   traverse the array, append the loaded images into a DOM element, and log
   those that failed:
   ```js
      Promise.allSettled(promises)
         .then(results => {
            for (result of results)
               if (result.status === 'fulfilled') . . . else . . .
         })
   ```

9. Repeat the preceding exercise, but use ``await`` instead of ``then``.


10. Implement a function ``sleep`` that yields a promise so that one can call
    ```js
      await sleep(1000)
    ```


11. Describe the difference between
    ```js
      const loadCatImage = async () => {
         try {
            const result = await fetch('https://aws.random.cat/meow')
            const imageJSON = await result.json()
            return loadImage(imageJSON.file)
         } catch {
            return brokenImage
         } 
      }
    ```
    and
    ```js
      const loadCatImage = async () => {
         try {
            const result = await fetch('https://aws.random.cat/meow')
            const imageJSON = await result.json()
            return await loadImage(imageJSON.file)
         } catch {
            return brokenImage
         } 
      }
    ```
    Hint: What happens if the future returned by loadImage is rejected?


12. Experiment with calling an async function that throws an exception in
    Node.js. Given
    ```js
      const rejectAfterDelay = (result, delay) => {
         return new Promise((resolve, reject) => {
            const callback = () => reject(result)
            setTimeout(callback, delay)
         })
      }
    ```
    try
    ```js
      const errorAfterDelay = async (message, delay) =>
         await rejectAfterDelay(new Error(message), delay)
    ```
    Now invoke the ``errorAfterDelay`` function. What happens? How can you
    avoid this situation?

13. Explain how the error message from the preceding exercise can be useful
    for locating a forgotten ``await`` operator, such as
    ```js
      const errorAfterDelay = async (message, delay) => {
         try {
            return rejectAfterDelay(new Error(message), 1000)
         } catch(e) {
            console.error(e)
         }
      }
    ```
14. Write complete programs that demonstrate the ``Promise.all`` and
    ``Promise.race`` functions of Section 9.7, "Executing Multiple Promises"
    (page 196).


15. Write a function ``produceAfterRandomDelay`` that produces a value after a
    random delay between 0 and a given maximum milliseconds. Then produce an
    array of futures where the function is applied to 1, 2, . . . , 10, and
    pass it to ``Promise.all``. In which order will the results be collected?


16. Use the Fetch API to load a (CORS-friendly) image. Fetch the URL, then
    call ``blob()`` on the response to get a promise for the BLOB. Turn it
    into an image as in the ``loadImage`` function. Provide two
    implementations, one using then and one using ``await``.


17. Use the Fetch API to obtain the HTML of a (CORS-friendly) web page. Search
    all image URLs and load each image.


18. When work is scheduled for the future, it may happen that due to changing
    circumstances the work is no longer needed and it should be canceled.
    Design a scheme for cancellation. Consider a multistep process, such as in
    the preceding exercise. At each stage, you will want to be able to abort
    the process. There is no standard way yet of doing this in JavaScript, but
    typically, APIs provide "cancellation tokens". A ``fetchImages`` function
    might receive an additional argument
    ```js
      const token = new CancellationToken()
      const images = fetchImages(url, token)
    ```
    The caller can later decide to call
    ```js
      token.cancel()
    ```
    In the implementation of an cancelable ``async`` function, the call
    ```js
      token.throwIfCancellationRequested()
    ```
    throws an exception if cancellation was indeed requested. Implement this
    mechanism and demonstrate it with an example.


19. Consider this code that carries out some asynchronous work such as
    fetching remote data, handles the data, and returns the promise for
    further processing:
    ```js
      const doAsyncWorkAndThen = handler => {
         const promise = asyncWork();
         promise.then(result => handler(result));
         return promise;
      }
    ```
    What happens if ``handler`` throws an exception? How should this code be
    reorganized?


20. What happens when you add ``async`` to a function that doesn’t return
    promises?


21. What happens if you apply the ``await`` operator to an expression that
    isn’t a promise? What happens if the expression throws an exception? Is
    there any reason why you would want to do this?
