const fetch = require('node-fetch');

const getBars = async (symbol)=>{
    try {
        const resp = await fetch(`https://paper-api.alpaca.markets/v2/stocks/${symbol}/bars?timeframe=1Week`,{
            'headers':{
                'APCA-API-KEY-ID':'PKSPH6NPJZINKWACMP9J',
                'APCA-API-SECRET-KEY':'IHiEdM93p15uFfpfbXJOSTlHjvnt8jzw56GqMYD8',

            }
        })
        
        return resp;

    }
    catch(e){
        console.log(e)
    }
}

module.exports = getBars;