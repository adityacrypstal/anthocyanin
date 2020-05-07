import actions from './actions';

const initState = {
    products: [],
    loading: false,
    initialProduct: false,
    selectedProduct: null,
    totalCount: 0
};

export default function productReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_PRODUCTS: {
            return {
                ...state,
                products: action.products.rows,
                totalCount: action.products.count,
                loading: false,
                initialProduct: true
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
