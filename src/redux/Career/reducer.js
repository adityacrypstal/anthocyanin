import actions from './actions';

const initState = {
    careers: [],
    loading: false,
    initialCareer: false,
    selectedCareer: null,
    totalCount: 0
};

export default function careerReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_BLOGS: {
            return {
                ...state,
                careers: action.careers.rows,
                totalCount: action.careers.count,
                loading: false,
                initialCareer: true
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
