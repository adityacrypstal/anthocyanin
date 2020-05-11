import actions from './actions';

const initState = {
    categories: [],
    loading: false,
    initialCategory: false,
    selectedCategory: null,
    totalCount: 0
};

export default function categoryReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_CATEGORIES: {
            return {
                ...state,
                categories: action.categories,
                totalCount: action.categories.length,
                loading: false,
                initialCategory: true
            };
        }
        case actions.PUT_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.category,
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
