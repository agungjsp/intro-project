import api from './apiHelper'
export default {
    //Get All Data
    getUsers: () => api.get('users'),
    getPostsUser: (id) => api.get('posts?userId=' + id),
    getAlbumsUser: (id) => api.get('albums?userId=' + id),
    getPhotosAlbum: (id) => api.get('photos?albumId=' + id),

    //Get Data
    getDetailUser: (id) => api.get('users?id=' + id),
    getDetailPost: (id) => api.get('posts/' + id),

    //Update Data
    updatePost: (id, payload) => api.put('posts/' + id, {}, { ...payload }),

    //Create Data
    createPhoto: (payload) => api.post('photos', {}, { ...payload })
}
