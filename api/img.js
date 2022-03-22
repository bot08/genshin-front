import fetch from "node-fetch"
const API_ROOT ='https://sushicat.pp.ua/api/genshin/storage/uploads/2021/07/15/Character_Tartaglia_Portrait-1_uid_60f0b8383d496.png';


exports.handler = async (event, context) => {
            try {
                const doggoEndpoint =`${API_ROOT}`;
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