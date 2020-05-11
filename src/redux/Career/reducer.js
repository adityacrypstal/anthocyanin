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
        default:
            return state;
    }
}
