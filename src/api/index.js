import ajax from "./ajax";

export const getMainInfo = () => ajax("/getMainInfo");

export const getCountryInfo = (country) => ajax("/getCountryInfo/" + country);
export const getBlogInfo = (country, which, id) =>
  ajax(`/getBlogInfo/${country}/${which}/${id}`);
