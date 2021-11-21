# Alchemy EIP-1559 Gas Estimator Tutorial

![download](https://user-images.githubusercontent.com/72762629/141164192-2909476d-613a-4ea7-a183-532cee81e405.jpg)

In this repository, you will find the code related to the [📈 How to estimate Gas Fee After EIP-1559](https://docs.google.com/document/d/1sTrOPjvzxKr5vQxAL1zDKNCEngiLSGPBTDStGlYvvSk) tutorial.

Feel free to fork and play with it, and if you find any error, or there's something you think it should be modified send us a **push request!**

If you're interested in learning more, or have feedback, suggestions, or questions, reach out to us in [Discord](https://discord.gg/gWuC7zB)! Get started with Alchemy today by [signing up for free](https://www.alchemy.com/)!


## How To Run

* Clone the repository
* Grab your [Alchemy Key](https://docs.alchemy.com/alchemy/introduction/getting-started)
* Substitute your Alchemy Key in:

```
// app.js

const web3 = createAlchemyWeb3("CHANGE WITH YOUR WEBSOCKET URI");

```
* Install the dependencies with:
```
yarn install || npm install
```
* Run the app:
```
node app.js
```
Wait a couple of seconds and you should see the estimate appearing in your terminal:

![price estimator](https://user-images.githubusercontent.com/72762629/141165595-928d14d9-baa4-4369-91b1-be1d4b97f4cf.gif)
