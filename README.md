# Proof of concept for a different architecture for mathjs

See discussion at https://github.com/josdejong/typed-function/issues/138

## Concept

It tries out a couple of things:

1.  Getting rid of factory functions and other overhead, making it easier to create a new function. Defining a function looks like:
    ```js
    export const add = {
      'number, number': function (a, b) {
        return a + b
      }
    }
    ```
3.  It tries out referencing to other functions via `this`, i.e.:
    ```js
    export const subtract = {
      'any, any': function (a, b) {
        return this.add(a, this.negate(b))
      }
    }
    ```

## Thoughts

1. It is very nice to have less plumbing, I like the simplicity of this API, it looks less intimidating.
2. Referring to other functions via `this` sucks. You lose the right context of `this` as soon as you use or do not use an arrow function at the right place.
3. You don't really have a clue which dependencies a function has exactly, you can only figure that out runtime.
