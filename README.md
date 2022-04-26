# SHA-256 Project

**Learning more about hash functions, in particular SHA-256.**  
From Jack O'Connor's project in which we implement SHA-256 ourselves.  
This was super fun! Thanks for the brilliant walkthrough Jack!  
https://github.com/oconnor663/sha256_project

— Jason, April 9, 2022

_More info about the SHA-2 family of hash functions: [wikipedia](https://en.wikipedia.org/wiki/SHA-2)_

## Usage

_For use with [NodeJS](https://nodejs.org/)_

Get the SHA-256 hash of a message by running:

```
node sha256.js "your message in quotes"
```

Test a function by running its test file:

```
node lib/[function name].test.js
```

## Disclaimer

I made this for my own study — please don't use it for actual cryptography.  
Use things that are more rigorously tuned and tested like [crypto-js](https://github.com/brix/crypto-js).

Because this was meant for learning, little effort has been made to optimize its performance or resource use.

There are also some code paths that involve JavaScript BigInts.  
BigInt operations are not constant time and so are vulnerable to timing attacks.  

## Notes

Throughout the code you may notice bitwise expressions followed with a `0` rightshift.

```
( some expression ) >>> 0;
```

We do this because we'll need a particular type of number for the bit-level operations of SHA-256, but unfortunately JavaScript doesn't typically concern itself with different types of numbers. For our bitwise math to be done correctly we must use **unsigned 32 bit integers.** JavaScript _does_ have bitwise operators, but it handles these operations on its `Number` datatype (a 64 bit float) as signed 32 bit ints. That's close, but still not exactly what we need for our alogrithm. Thankfully, there is one JS bitwise operator that isn't exactly like its siblings. JavaScript has a bitwise Unsigned Right Shift `>>>`, with which it will handle its operands as, you guessed it, unsigned 32 bit ints! So by using our `Number`s in one of these operations (specifically not changing the bits by shifting them nowhere) we ensure that we're using unsigned 32 bit integers instead of signed ones.
