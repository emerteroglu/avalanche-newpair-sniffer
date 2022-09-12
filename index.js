const ethers = require('ethers');
require('dotenv').config();
const {
  Telegraf
} = require('telegraf');
const abi = require('./abis.js');
const rpcurl = "https://api.avax.network/ext/bc/C/rpc";
const addrs = {
  pangolin: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
  lydia: '0xe0C1bb6DF4851feEEdc3E14Bd509FEAF428f7655',
  elk: '0x091d35d7F63487909C863001ddCA481c6De47091',
  olive: '0x4Fe4D8b01A56706Bc6CaD26E8C59D0C7169976b3',
  sushi: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  yeti: '0x58C8CD291Fa36130119E6dEb9E520fbb6AcA1c3a',
  cnr: '0xCFBA329d49C24b70F3a8b9CC0853493d4645436b',
  zero: '0x2Ef422F30cdb7c5F1f7267AB5CF567A88974b308',
  bag: '0x3587B8c0136c2C3605a9E5B03ab54Da3e4044b50',
  joe: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
  party: '0x58A08bc28f3E8dab8Fb2773D8f243bC740398b09'
};
const names = ['pangolin', 'lydia', 'elk', 'olive', 'sushi', 'yeti', 'cnr', 'zero', 'bag', 'joe', 'party'];
const nicenames = ["Pangolin", "Lydia Finance", "Elk Finance", "Olive Swap", "Sushi Swap", "Yeti Swap", "Canary Exchange", "Zero Swap", "Baguette Finance", "Trader Joe", "Party Swap"];
const niceurl = ['https://app.pangolin.exchange/#/swap', 'https://exchange.lydia.finance/#/swap', 'https://app.elk.finance/#/swap',
  'https://swap.olive.cash/#/swap', 'https://app.sushi.com/swap', 'https://exchange.yetiswap.app/#/swap',
  'https://app.canary.exchange/#/swap', 'https://app.0.exchange/#/swap', 'https://app.baguette.exchange/#/swap', 'https://www.traderjoexyz.com/#/trade',
  'https://app.partyswap.io/#/swap'
];

async function main() {

  const provider = new ethers.providers.JsonRpcProvider(rpcurl);
  const bot = new Telegraf(process.env.TELEGRAMBOTKEY);

  var factories = [];
  var pairs = [];

  console.log(names.length + " DEXs INITIALIZING");

  for (let i = 0; i < names.length; i++)
    factories.push(new ethers.Contract(addrs[names[i]], abi.factory, provider));

  for (let i = 0; i < factories.length; i++) {

    let p = await factories[i].allPairsLength();
    p = p.toNumber();
    pairs.push(p);

  }
  //console.log(pairs);

  console.log("Deploy Succes");
  while (1) {
    try {
      for (let i = 0; i < factories.length; i++) {
        let p = await factories[i].allPairsLength();
        p = p.toNumber();

        if (pairs[i] < p) {
          for (let j = pairs[i]; j < (p); j++) {
            let pgladr = await factories[i].allPairs(j);
            let pglcont = new ethers.Contract(pgladr, abi.pgl, provider);
            let res = await pglcont.getReserves();
            let token0adr = await pglcont.token0();
            let token1adr = await pglcont.token1();
            let token0 = new ethers.Contract(token0adr, abi.erc20, provider);
            let token1 = new ethers.Contract(token1adr, abi.erc20, provider);
            let token0n = await token0.name();
            let token1n = await token1.name();
            let token0s = await token0.symbol();
            let token1s = await token1.symbol();
            let token0d = await token0.decimals();
            let token1d = await token1.decimals();
            let token0l = parseFloat(ethers.utils.formatUnits(res[0], token0d));
            let token1l = parseFloat(ethers.utils.formatUnits(res[1], token1d));

            let a = token1s + "/" + token0s + " Pair Created on " + nicenames[i] + "\n\n";
            let b = token0n + " / " + token0s + "\n" + token0adr + '\n-> <a href="https://cchain.explorer.avax.network/address/' + token0adr + '">' + 'Contract\n' + '</a>';
            let b2 = 'Liquidity: $' + token0s + ':' + (token0l).toFixed(2) + '\n\n';
            let c = token1n + " / " + token1s + "\n" + token1adr + '\n-> <a href="https://cchain.explorer.avax.network/address/' + token1adr + '">' + 'Contract\n' + '</a>';
            let c2 = 'Liquidity: $' + token1s + ':' + (token1l).toFixed(2) + '\n\n';
            let tmp, tmp2;

            let c3 = '<a href="https://dexscreener.com/avalanche/' + pgladr + '"' + ">Chart" + "</a>" + '\n';

            if (token1s === "WAVAX") {
              tmp = c;
              tmp2 = c2;
              c = b;
              c2 = b2;
              b = tmp;
              b2 = tmp2;
              tmp = token0adr;
              token0adr = token1adr;
              token1adr = tmp;
            }

            let d = '<a href="' + niceurl[i] + '?inputCurrency=' + token0adr + "&outputCurrency=" + token1adr + '"' + ">Trade on " + nicenames[i] + "</a>" + '\n';

            await bot.telegram.sendMessage(process.env.CHATID, a + b + b2 + c + c2 + c3 + d + e, {
              parse_mode: "HTML",
              disable_web_page_preview: true
            });


            console.log("New Pair Created On " + nicenames[i] + "\n" + token0n + "/" + token0s + ":" + token0adr + "\n" + token1n + "/" + token1s + ":" + token1adr + "\n");
          }
          pairs[i] = p;
        }
      }
    } catch (err) {
      console.log(err);
    }

    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

async function init() {
  while (true) try {
    await main();
  } catch (e) {
    console.log(e);
  }
}
init();