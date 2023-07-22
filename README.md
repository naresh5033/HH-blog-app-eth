# Build Dev.to Blog App with Next.js & Solidity

![Blog App Eth](Blogapp.png)

## Blog post App

This is next js based dapp, and for the contract we used HH framework.

## BlogFactory.sol

The contract BlogFactory.sol will basically produce all the other post. which means we'll deploy only this contract on the BC, and later In our app each of the post will be in separate contract means each of the post will ve 0x addr.

## Post.sol

The post.sol constructor has 5 args-> post title(str), author addr, timestamp(str), tag(str), content(str)

This is a simple example of how to build a Dev.to-like Blog application with Next.js and Solidity.

This is a simple example of how to build a Dev.to-like Blog application with Next.js and Solidity.

---

### Tech used in this project:

- MetaMask Login using Rainbow Kit
- Web3.js
- Solidity (v0.8.16)
- Alchemy, as RPC Provider

---

## Deployment

For the BC part i ve used HH as the framework to deploy the SCs and the contracts are deployed and verified in the goerli testnet.
The deployed addr are

- Post.sol --> "0x51e477b8bBe84A1FBCD4A4222Fd6a80a3dA399C2"
- BlogFactory.sol --> "0x9D8C6F44beBbCdd65DB2C12AA86C8Eb0123083b6"
- The app is deployed in heroku and the url is --> https://blog-app-eth.herokuapp.com/
- and the second deployment in the verce and the url is https://hh-blog-app.vercel.app/
