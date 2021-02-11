function getName(quoteSummary) {
  return sanitize(quoteSummary['summaryProfile']['name']);
}

function getStartDate(quoteSummary) {
  return quoteSummary['summaryProfile']['startDate'];
}

function getMarketPrice(quoteSummary) {
  return quoteSummary['price']['regularMarketPrice']['raw'];
}

function getMarketDayHigh(quoteSummary) {
  return quoteSummary['price']['regularMarketDayHigh']['raw'];
}

function getMarketDayLow(quoteSummary) {
  return quoteSummary['price']['regularMarketDayLow']['raw'];
}

function get52WeekHigh(quoteSummary) {
  return quoteSummary['summaryDetail']['fiftyTwoWeekHigh']['raw'];
}

function get52WeekLow(quoteSummary) {
  return quoteSummary['summaryDetail']['fiftyTwoWeekLow']['raw'];
}

function getMarketVolume(quoteSummary) {
  return quoteSummary['price']['regularMarketVolume']['raw'];
}

function getAverageVolume10days(quoteSummary) {
  return quoteSummary['summaryDetail']['averageVolume10days']['raw'];
}

function getVolume24h(quoteSummary) {
  return quoteSummary['price']['volume24Hr']['raw'];
}

function getMarketCap(quoteSummary) {
  return quoteSummary['price']['marketCap']['raw'];
}

function getMarketChangePercent(quoteSummary) {
  return quoteSummary['price']['regularMarketChangePercent']['raw'];
}



