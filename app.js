const {createAlchemyWeb3} = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3("CHANGE WITH WEBSOCKET URI");


async function getLatestGasFees(){
    const historicalBlocks = 20;

    const feeHistory = await web3.eth.getFeeHistory(historicalBlocks, 'pending', [50])
    const baseTipAvg =  getHistoricalAvgBaseTip(feeHistory);
    const priorityGasFeeAvg = getHistoricalAvgPriorityFee(feeHistory)
    const historicalGasFeeAvg = baseTipAvg + priorityGasFeeAvg


    const block = await web3.eth.getBlock('pending')

    const currentBaseGasFee = priorityGasFeeAvg+ Number(block.baseFeePerGas)

    const currentTotalGasFee = currentBaseGasFee + priorityGasFeeAvg
    
    console.table({
    	'Historical Gas Fee (AVG)': historicalGasFeeAvg,
    	'Current Base Gas Fee': currentBaseGasFee,
    	'Current Estimated Priority Fees': priorityGasFeeAvg,
    	'Current Estimated Total Gas Fees':  currentTotalGasFee
	})
}


function getHistoricalAvgPriorityFee(feeHistory){
    const priorityFees =   feeHistory.reward.map(i => {return Number(i[0])});
    const sumPriorityFees = priorityFees.reduce((a, v) => a + v);
    const avgPriorityFees = Math.round(sumPriorityFees/priorityFees.length);

    return avgPriorityFees;

}   


function getHistoricalAvgBaseTip(feeHistory){
    const baseFee = feeHistory.baseFeePerGas.map(i => Number(i));
    const sumBaseFee = baseFee.reduce((a, v) => a+v);
    const avgGasFee = Math.round(sumBaseFee/baseFee.length);
    return avgGasFee;
}
    
web3.eth.subscribe('newBlockHeaders', ((err, result) => {
    if(!err){
        getLatestGasFees()
    }
}));
