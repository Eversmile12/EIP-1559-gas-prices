# EIP-1559 Gas Estimator Tutorial

![download (2)](https://user-images.githubusercontent.com/72762629/142850513-7b686b52-41a8-4826-9bf7-1975e4b1d1cd.jpg)

In this repository, you will find the code related to the [Chainlink - Calculate EIP-1559 Gas Fees](https://docs.google.com/presentation/d/1Pdn-rhNGf1_y9A59KWEpWSmCDZzP5eOfj0zE2oEdPXc/edit?usp=sharing) presentation.

Feel free to fork and play with it, and if you find any error, or there's something you think it should be modified send us a **push request!**

If you're interested in learning more, or have feedback, suggestions, or questions, reach me out on [Twitter](https://twitter.com/VittoStack)!

## What is This?

A Gas price estimator based on the EIP-1559 or London Fork. It uses web sockets to retrieve latest estimated Gas prices based on historical 50th priority fees percentile, and current pending block Base fees.

Ream more about the [EIP-1559 here](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md).

## How To Run

* Clone the repository
* Grab your [Infura Key](https://infura.io/):
![chainlink_price_estimator](https://user-images.githubusercontent.com/72762629/142849126-baeda97b-daba-4268-8b77-adb35b459acb.gif)

* Substitute your Infura Key in:

```
// app.js

const web3 = new Web3("CHANGE WITH YOUR WEBSOCKET URI");

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
![eip-price-estimator-log](https://user-images.githubusercontent.com/72762629/142851249-b7806b13-fcf0-47fe-ab3e-8d490bba4f3a.gif)
Note: It might take up to a minute for the websocket to connect and start logging Gas prices. GIF is x10 speed.


