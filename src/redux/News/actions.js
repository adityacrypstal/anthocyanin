const actions = {
    GET_NEWS: 'GET_NEWS',
    GET_RECENT: 'GET_RECENT',
    UPDATE_NEWS: 'UPDATE_NEWS',
    UPDATE_RECENT: 'UPDATE_RECENT',
    LOADING: 'LOADING',
    LOADING_RECENT: 'LOADING_RECENT',
    GET_NEWS_BY_ID:'GET_NEWS_BY_ID',
    SELECTED_NEWS:'SELECTED_NEWS',
    getNews: () => ({
        type: actions.GET_NEWS
    }),
    getNewsId: (id) => ({
        type: actions.GET_NEWS_BY_ID, payload:{id}
    }),
    getRecent: () => ({
        type: actions.GET_RECENT
    })
}
export default actions;
