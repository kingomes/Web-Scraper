"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio_1 = __importDefault(require("cheerio"));
require("fs");
// function to get the raw data
const getRawData = async (URL) => {
    const response = await (0, node_fetch_1.default)(URL);
    const data = await response.text();
    return data;
};
// URL for data
const URL = "https://www.espn.com/nfl/stats";
// start of the program
const scrapeData = async () => {
    const rawData = await getRawData(URL);
    // parsing the data
    const parsedData = cheerio_1.default.load(rawData);
    console.log(parsedData);
    // write code to extract the data
    // here
    // ...
    // ...
};
// invoking the main function
scrapeData();
