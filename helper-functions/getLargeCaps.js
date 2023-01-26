const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs')

const getLargeCaps = async () => {
  tickers = []

  for (var i = 1; i < 55; i++) {
    const response = await axios.get('https://companiesmarketcap.com/page/' + i.toString() + '/')
    const $ = cheerio.load(response.data);
    let ticker = $('div.company-code');

    ticker.each(function (ix, e) {
      tickers.push($(e).text().replace(/(\s+)/g, ' '));


    })


  }
  console.log(tickers)
      
    // Write data in 'Output.txt' .
    fs.writeFile('Output.txt', tickers.join(","), (err) => {
          
        // In case of a error throw err.
        if (err) throw err;
    })
}

getLargeCaps()


