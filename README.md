# SHA-256 Project

Learning more about hash functions, in particular SHA-256.  
From Jack O'Connor's project in which we implement SHA-256 ourselves.  
This was super fun! Thanks for the brilliant walkthrough Jack!  
https://github.com/oconnor663/sha256_project

— Jason, April 9, 2022

## Usage

_For use with [NodeJS](https://nodejs.org/)_  
Get the SHA-256 hash of a message by running `node sha256.js "your message in quotes"`.

## Disclaimer

I made this for my own study — please don't use it for actual cryptography.  
Use things that are more rigorously tuned and tested like [crypto-js](https://github.com/brix/crypto-js).

Because this was meant for learning, little effort has been made to optimize its performance or resource use.

There are also some operations in this code that involve JavaScript **BigInts**.  
BigInt operations are not constant time and so are vulnerable to timing attacks.  
Another reason this code is not meant for serious cryptography.
