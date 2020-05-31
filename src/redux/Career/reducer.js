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
        case actions.UPDATE_CAREERS: {
            return {
                ...state,
                careers: action.careers,
                totalCount: action.careers.length,
                loading: false,
                initialCareer: true
            };
        }
        case actions.LOADING:
            return {
                ...state,
                loading: true
            };
        case actions.APPLYING:
            return {
                ...state,
                applying: true
            };
        case actions.APPLIED:
            return {
                ...state,
                applying: false
            };
        default:
            return state;
    }
}
