const fetch = require('./main.js')
const API_ENDPOINT = "https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?token=a4191046104f8f3674f788e804c2d0";


exports.handler = async (event, context) => {
  try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      return {
          statusCode: 200,
          body: JSON.stringify({
              data
          })
      };
  } catch (error) {
      console.log(error);
      return {
          statusCode: 500,
          body: JSON.stringify({
              error: 'Failed fetching data'
          }),
      };
  }
};