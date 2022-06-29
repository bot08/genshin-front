import fetch from "node-fetch"
const API_ROOT ='https://sushicat.pp.ua/api/genshin/storage/uploads/2021/07/15/Character_Tartaglia_Portrait-1_uid_60f0b8383d496.png';


exports.handler = async (event, context) => {
            try {
                const doggoEndpoint =`${API_ROOT}`;
                const response = await fetch(doggoEndpoint, {headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59' }});
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