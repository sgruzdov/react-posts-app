import * as axios from 'axios'

const instance  = axios.create({ baseURL: 'https://react-posts-app-33d31-default-rtdb.firebaseio.com' })

export const postsApi = {
    getPosts: () => instance.get('/posts.json'),
    getSinglePost: id => instance.get(`/posts/${id}.json`)
}