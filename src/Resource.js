function getResource(ticker, homeCurrency) {
  const stores = getStores(ticker, homeCurrency);
  const quoteSummary = stores['QuoteSummaryStore'];

  if (!quoteSummary) {
    return [['Not Found']];
  }

  return [[
    getName(quoteSummary),
    getStartDate(quoteSummary),
    getMarketPrice(quoteSummary),
    getMarketDayHigh(quoteSummary),
    getMarketDayLow(quoteSummary),
    get52WeekHigh(quoteSummary),
    get52WeekLow(quoteSummary),
    getMarketVolume(quoteSummary),
    getAverageVolume10days(quoteSummary),
    getVolume24h(quoteSummary),
    getMarketCap(quoteSummary),
    getMarketChangePercent(quoteSummary),
  ]];
}

function getStores(ticker, homeCurrency) {
  try {
    const date = new Date();
    const millisToAvoidCache = date.getTime();
    const url = 'https://finance.yahoo.com/quote/' + ticker + '-' + homeCurrency + '?millisToAvoidCache=' + millisToAvoidCache;
    const response = UrlFetchApp.fetch(url, { 'muteHttpExceptions': true });
    const htmlString = response.getContentText();
    const regex = new RegExp(/root.App.main = \{.*\:\{.*\:.*\}\}/g);
    const match = regex.exec(htmlString);
    const appString = match[0].substring(16);
    const appJson = JSON.parse(appString);
    return appJson['context']['dispatcher']['stores'];
  } catch (err) {
    // throw new Error('\'' + ticker + '\'' + ' is invalid or request has failed (try reloading the page).');
    return Logger.log(err);
  }
}
