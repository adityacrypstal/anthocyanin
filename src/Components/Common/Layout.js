import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Layout);
