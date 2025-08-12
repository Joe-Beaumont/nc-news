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

const isLocal = true
const baseURL = isLocal
? "http://localhost:9090/api/"
: "https://joe-beaumont-nc-news.onrender.com/api/"

export function getArticles(article_id) {
    if (article_id) {
        return axios.get(`${baseURL}articles/${article_id}`)
            .then((response) => {
                return response.data.article
            })
            .catch((error) => {
                throw new Error ("Error: We could not find that article")
            })
    } else {
        return axios.get(`${baseURL}articles`)
            .then((response) => {
                return response.data.articles
            })
            .catch((error) => {
                throw new Error ("Error: We could not find any articles")
            })
    }
}

export function getComments(comment_id) {
    return axios.get(`${baseURL}comments/${comment_id}`)
        .then((response) => {
            return response.data.comment
        })
        .catch((error) => {
            throw new Error ("Error: We could not find that comment")
        })
}

export function getCommentsById(article_id) {
    return axios.get(`${baseURL}articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments
        })
        .catch((error) => {
            throw new Error ("Error: We could not find any comments")
        })
}


export function incrementVotesOnArticle(inc_votes, article_id) {
    return axios.patch(`${baseURL}articles/${article_id}`, inc_votes)
    .catch((error) => {
        throw new Error ("Error: Vote unsuccessful")
    })
}

export function incrementVotesOnComments(inc_votes, comment_id) {
    console.log("Voting on comment:", comment_id, "with", inc_votes);
    return axios.patch(`${baseURL}comments/${comment_id}`, { inc_votes })
        .catch((error) => {
            console.error(error);
            throw new Error("Error: Vote unsuccessful");
        });
}

export function postNewComment(request){
    const article_id = request.params
    return axios.post(`${baseURL}articles/${article_id}/comments`, request.body)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
        throw new Error ("Error: Comment could not be posted")
    })
}

export function deleteCommentAPI(comment_id){
    return axios.delete(`${baseURL}comments/${comment_id}`)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
        throw new Error ("Error: Comment could not be deleted")
    })
}

export function getTopics(){
    return axios.get(`${baseURL}topics`)
    .then((response) => {
        return response.data.topics
    })
    .catch((error) => {
        console.log(error)
        throw new Error ("Error: No topics found")
    })
}

export function getArticlesQueries(filter, by){
 
    return axios.get(`${baseURL}articles?filter=${filter}&by=${by}`)
    .then((response) => {
        return response.data.articles
    })
    .catch((error) => {
        console.log(error)
        throw new Error ("Error: No topics found")
    })
}