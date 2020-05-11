const actions = {
    GET_CATEGORIES: 'GET_CATEGORIES',
    UPDATE_CATEGORIES: 'UPDATE_CATEGORIES',
    GET_CATEGORY:'GET_CATEGORY',
    PUT_CATEGORY:'PUT_CATEGORY',
    LOADING: 'LOADING',
    getCategories: () => ({
        type: actions.GET_CATEGORIES
    }),
    getCategory :(id)=>({
        type:actions.GET_CATEGORY, payload:{id}
    })
}
export default actions;
