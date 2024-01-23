const axios = require("axios");
const Wazir = require("../models/wazirx");

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const obtained = response.data;

    const arr = Object.values(obtained);
    const reqData = arr.slice(0, 10);

    for (const item of reqData) {
        const tbi = new Wazir({
          name: item.name,
          last: item.last,
          buy: item.buy,
          sell: item.sell,  
          volume: item.volume,
          base_unit: item.base_unit,
        });
        await tbi.save();
      }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fetchData };
