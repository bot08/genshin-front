import fetch from "node-fetch"
const API_ROOT ='https://sushicat.pp.ua/api/';

module.exports = (url, args = {}) => {
    args.headers = args.headers || {}
    args.headers['user-agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
    return fetch(url, args)
  }

exports.handler = async (event, context) => {
            try {
                const doggoEndpoint =`${API_ROOT}${context}`;
                const response = await fetch(doggoEndpoint);
                const images = await response.json();
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        images
                    })
                };
            } catch (error) {
                console.log(error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'Failed fetching images ' }), 
                }; 
            } 
        };