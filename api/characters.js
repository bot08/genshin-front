import fetch from "node-fetch"
const API_ENDPOINT = "https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?token=a4191046104f8f3674f788e804c2d0";

module.exports = (url, args = {}) => {
    args.headers = args.headers || {}
    args.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59'
    return fetch(url, args)
  }

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