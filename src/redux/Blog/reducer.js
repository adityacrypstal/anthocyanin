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
                blogs: action.blogs,
                totalCount: action.blogs.length ,
                loading: false,
                initialBlog: true
            };
        }
        case actions.PUT_BLOG: {
            return {
                ...state,
                selectedBlog: action.blog,
                loading: false
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
