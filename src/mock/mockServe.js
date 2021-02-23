import Mock from "mockjs";
import mainData from "./data.json";
import countryData from "./synopsis.json";

Mock.mock("/getMainInfo", { code: 0, data: mainData });
Mock.mock(/^\/getCountryInfo\/\w+$/, function(options) {
  const country = options.url.substring(16);
  const data = countryData.find((item) => item.name == country);
  return { code: 0, data };
});

Mock.mock(/[^\s]*/, function(options) {
  let str = options.url.substring(13);
  str = str.split("/");
  let country = str[0];
  let which = str[1];
  let id = str[2];
  const data = countryData.find((item) => item.name == country);
  const result = data[which].find((item) => item.id == id);
  return { code: 0, data: result };
});
console.log("mockServer");
