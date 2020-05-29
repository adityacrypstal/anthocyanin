import actions from './actions';

const initState = {
    news: [],
    recent:[],
    loading: false,
    ladingRecent:false,
    initialNews: false,
    selectedNews: null,
    totalCount: 0
};

export default function newsReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_NEWS: {
            return {
                ...state,
                news: action.news,
                totalCount: action.news.length,
                loading: false,
                initialNews: true
            };
        }
        case actions.UPDATE_RECENT: {
            return {
                ...state,
                recent: action.recent,
                loadingRecent: false
            };
        }
        case actions.LOADING:
            return {
                ...state,
                loading: true
            };
        case actions.LOADING_RECENT:
            return {
                ...state,
                loadingRecent: true
            };
        case actions.SELECTED_NEWS: {
            return {
                ...state,
                selectedNews: action.news[0],
                loading: false
            };
        }
        default:
            return state;
    }
}
