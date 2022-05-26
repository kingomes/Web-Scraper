import fetch, { RequestInfo } from "node-fetch"
import cheerio from "cheerio"
import fs from "fs"
// function to get the raw data
const getRawData = async (URL: RequestInfo) => {
    const response = await fetch(URL);
    const data = await response.text();
    return data;
};
// URL for data
const URL = "https://www.espn.com/nfl/stats";
// start of the program
const scrapeData = async () => {
   const rawData = await getRawData(URL);
   // parsing the data
   const parsedData = cheerio.load(rawData);
   console.log(parsedData);
   // write code to extract the data
   // here
   // ...
   // ...
};
// invoking the main function
scrapeData();