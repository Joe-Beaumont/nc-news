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


export function getArticles(article_id) {
    if (article_id) {
        return axios.get(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}`)
            .then((response) => {
                return response.data.article
            })
            .catch((error) => {
                throw error
            })
    } else {
        return axios.get("https://joe-beaumont-nc-news.onrender.com/api/articles")
            .then((response) => {
                return response.data.articles
            })
            .catch((error) => {
                throw error
            })
    }
}

export function getCommentsById(article_id) {
    return axios.get(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments
        })
        .catch((error) => {
            throw error
        })
}


export function incrementVotesOnArticle(inc_votes, article_id) {
    return axios.patch(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}`, inc_votes)
    .catch((error) => {
        throw error
    })
}

export function postNewComment(request){
    const article_id = request.params
    console.log(request.body)
    return axios.post(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}/comments`, request.body)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
        throw error
    })
}