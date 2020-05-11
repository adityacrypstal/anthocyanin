import {combineReducers} from "redux";
import blogReducer from "./Blog/reducer";
import careerReducer from "./Career/reducer";
import categoryReducer from "./Category/reducer";
import contactReducer from "./Contact/reducer";
import newsReducer from "./News/reducer";
import productReducer from "./Product/reducer";
import rdReducer from "./RD/reducer";
import carouselReducer from "./Carousel/reducer";
import technologyReducer from "./Technologies/reducer";
import galleryReducer from "./Gallery/reducer";

export default combineReducers({
    blogs: blogReducer,
    careers: careerReducer,
    categories: categoryReducer,
    contacts: contactReducer,
    news: newsReducer,
    products: productReducer,
    rds: rdReducer,
    carousels: carouselReducer,
    technologies: technologyReducer,
    gallery:galleryReducer

});
