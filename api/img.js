import fetch from "node-fetch"
const API_ROOT ='https://sushicat.pp.ua/api/';

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