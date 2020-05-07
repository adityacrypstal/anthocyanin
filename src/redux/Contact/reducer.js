import actions from './actions';

const initState = {
    contacts: [],
    loading: false,
    initialContact: false,
    selectedContact: null,
    totalCount: 0
};

export default function contactReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_CONTACTS: {
            return {
                ...state,
                contacts: action.contacts.rows,
                totalCount: action.contacts.count,
                loading: false,
                initialContact: true
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
