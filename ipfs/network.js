import axios from 'axios';

export const postRequest = (
  url,
  params,
  headers,
  data
) => new Promise((resolve, reject) => {
  axios.post(url, data, {
    maxContentLength: "Infinity",
    params: params,
    headers: headers,
    timeout: 5000,
  })
    .then((res) => {
      resolve(res.data)
    })
    .catch((err) => {
      console.log(err)
      reject(err)
    })
})
