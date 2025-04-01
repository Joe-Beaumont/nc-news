import axios, { Axios } from "axios";
import { useEffect, useState } from "react";


// Custom Hook
// export function useFetchAll(dataType) {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         axios.get(`https://joe-beaumont-nc-news.onrender.com/api/${dataType}`)
//         .then((response) =>{
//             console.log(response.data)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     })
// }


export function getArticles (article_id) {
    if(article_id){
        return axios.get(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
    .catch((error) => {
        console.log(error)
    })
    } else {
    return axios.get("https://joe-beaumont-nc-news.onrender.com/api/articles")
    .then((response) => {
        return response.data.articles
    })
    .catch((error) => {
        console.log(error)
    })
}
}