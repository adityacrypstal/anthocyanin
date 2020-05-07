import actions from './actions';

const initState = {
    blogs: [],
    loading: false,
    initialBlog: false,
    selectedBlog: null,
    totalCount: 0
};

export default function blogReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_BLOGS: {
            return {
                ...state,
                blogs: action.blogs.rows,
                totalCount: action.blogs.count,
                loading: false,
                initialBlog: true
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
