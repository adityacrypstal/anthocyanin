const actions = {
    GET_NEWS: 'GET_NEWS',
    GET_RECENT: 'GET_RECENT',
    UPDATE_NEWS: 'UPDATE_NEWS',
    UPDATE_RECENT: 'UPDATE_RECENT',
    LOADING: 'LOADING',
    LOADING_RECENT: 'LOADING_RECENT',
    getNews: () => ({
        type: actions.GET_NEWS
    }),
    getRecent: () => ({
        type: actions.GET_RECENT
    })
}
export default actions;
