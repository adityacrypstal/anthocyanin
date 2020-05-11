import actions from './actions';

const initState = {
    gallery: [],
    loading: false,
    initialGallery: false,
    selectedGallery: null,
    totalCount: 0
};

export default function galleryReducer(state = initState, {type, payload, ...action}) {
    switch (type) {
        case actions.UPDATE_GALLERY: {
            return {
                ...state,
                gallery: action.gallery,
                totalCount: action.gallery.length,
                loading: false,
                initialBlog: true
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
