const actions = {
    GET_BLOGS: 'GET_BLOGS',
    UPDATE_BLOGS: 'UPDATE_BLOGS',
    LOADING: 'LOADING',
    GET_BLOG:'GET_BLOG',
    PUT_BLOG:'PUT_BLOG',
    getBlogs: () => ({
        type: actions.GET_BLOGS
    }),
    getBlog :(id)=>({
        type:actions.GET_BLOG, payload:{id}
    })
}
export default actions;
