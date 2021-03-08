import ajax from "./ajax";

export const getMainInfo = () => ajax("/getMainInfo");

export const getCountryInfo = (country) => ajax("/getCountryInfo/" + country);
export const getBlogInfo = (country, which, id) =>
  ajax(`/getBlogInfo/${country}/${which}/${id}`);
export const getInfo = () =>
  ajax(
    "https://cfan.cc/tc/?mod=vue&act=getdata&uid=7299&token=350004cc238317c4932bed8de713a60a "
  );
