import actions from './actions';

const initState = {
    carousels: [],
    loading: false,
    initialCarousel: false,
    selectedCarousel: null,
    totalCount: 0
};

export default function carouselReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_CAROUSEL: {
            return {
                ...state,
                carousels: action.carousels,
                totalCount: action.carousels.length,
                loading: false,
                initialCarousel: true
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
