import actions from './actions';

const initState = {
    rds: [],
    loading: false,
    initialRd: false,
    selectedRd: null,
    totalCount: 0
};

export default function rdReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_RD: {
            return {
                ...state,
                rds: action.rds.rows,
                totalCount: action.rds.count,
                loading: false,
                initialRd: true
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
