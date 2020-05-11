import actions from './actions';

const initState = {
    technologies: [],
    loading: false,
    initialTechnology: false,
    selectedTechnology: null,
    totalCount: 0
};

export default function technologyReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_TECHNOLOGIES: {
            return {
                ...state,
                technologies: action.technologies,
                totalCount: action.technologies.length,
                loading: false,
                initialTechnology: true
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
