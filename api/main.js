import fetch from "node-fetch"
module.exports = (url, args = {}) => {
    args.headers = args.headers || {}
    args.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59'
    return fetch(url, args)
  }