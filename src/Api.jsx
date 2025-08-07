import axios from "axios";



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
                throw new Error ("Error: We could not find that article")
            })
    } else {
        return axios.get("https://joe-beaumont-nc-news.onrender.com/api/articles")
            .then((response) => {
                return response.data.articles
            })
            .catch((error) => {
                throw new Error ("Error: We could not find any articles")
            })
    }
}

export function getCommentsById(article_id) {
    return axios.get(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments
        })
        .catch((error) => {
            throw new Error ("Error: We could not find any comments")
        })
}


export function incrementVotesOnArticle(inc_votes, article_id) {
    return axios.patch(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}`, inc_votes)
    .catch((error) => {
        throw new Error ("Error: Vote unsuccessful")
    })
}

export function incrementVotesOnComment(inc_votes, comment_id) {
    return axios.patch(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}/comments/${comment_id}`, inc_votes)
    .catch((error) => {
        throw new Error ("Error: Vote unsuccessful")
    })
}

export function postNewComment(request){
    const article_id = request.params
    return axios.post(`https://joe-beaumont-nc-news.onrender.com/api/articles/${article_id}/comments`, request.body)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
        throw new Error ("Error: Comment could not be posted")
    })
}

export function deleteCommentAPI(comment_id){
    return axios.delete(`https://joe-beaumont-nc-news.onrender.com/api/comments/${comment_id}`)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
        throw new Error ("Error: Comment could not be deleted")
    })
}

export function getTopics(){
    return axios.get(`https://joe-beaumont-nc-news.onrender.com/api/topics`)
    .then((response) => {
        return response.data.topics
    })
    .catch((error) => {
        console.log(error)
        throw new Error ("Error: No topics found")
    })
}

export function getArticlesQueries(filter, by){
 
    return axios.get(`https://joe-beaumont-nc-news.onrender.com/api/articles?filter=${filter}&by=${by}`)
    .then((response) => {
        return response.data.articles
    })
    .catch((error) => {
        console.log(error)
        throw new Error ("Error: No topics found")
    })
}