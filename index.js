const Alpaca = require("@alpacahq/alpaca-trade-api");
const moment = require("moment");

// Instantiate the API with configuration options
const options = {
    keyId: "PKSPH6NPJZINKWACMP9J",
    secretKey: "IHiEdM93p15uFfpfbXJOSTlHjvnt8jzw56GqMYD8",
    paper: true,
};
const alpaca = new Alpaca(options);

const index = async () => {

    let bars = alpaca.getBarsV2(
        "AAPL",
        {
            start: moment().subtract(14, "days").format(),
            end: moment().subtract(20, "minutes").format(),
            timeframe: "1Week",
        },
        alpaca.configuration
    );
    const barset = [];

    for await (let b of bars) {
        barset.push(b);
    }
    console.log(barset)
}
index();