import {combineReducers} from "redux";
import blogReducer from "./Blog/reducer";
import careerReducer from "./Career/reducer";
import categoryReducer from "./Category/reducer";
import contactReducer from "./Contact/reducer";
import newsReducer from "./News/reducer";
import productReducer from "./Product/reducer";
import rdReducer from "./RD/reducer";

export default combineReducers({
    blogs: blogReducer,
    careers: careerReducer,
    categories: categoryReducer,
    contacts: contactReducer,
    news: newsReducer,
    products: productReducer,
    rds: rdReducer

});
