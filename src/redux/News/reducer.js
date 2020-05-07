import actions from './actions';

const initState = {
    news: [],
    loading: false,
    initialNews: false,
    selectedNews: null,
    totalCount: 0
};

export default function newsReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_NEWS: {
            return {
                ...state,
                news: action.news.rows,
                totalCount: action.news.count,
                loading: false,
                initialNews: true
            };
        }
        case actions.LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
