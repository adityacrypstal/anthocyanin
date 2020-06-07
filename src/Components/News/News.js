import React from 'react';
import {useParams, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import newsAction from "../../redux/News/actions";
import Loader from "../Common/Loader";
import {Markup} from "interweave";
import moment from "moment";
import './style.css'

const News = () => {
    const match = useRouteMatch();
    const {id} = useParams() || 0
    const {loading, selectedNews} = useSelector(state => state.news);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (id) {
            dispatch(newsAction.getNewsId(id));
        }
    }, [dispatch, id]);
    return (
        <div>
            <div className="breadcrumb-wapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3><span>Anthocyanin</span>
                                Sense of Essence</h3>
                        </div>
                        <div className="col-md-6">
                            <nav className="breadcrumb">
                                <a className="breadcrumb-item" href="#">Home</a>
                                <span className="breadcrumb-item ">News</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {selectedNews ? (
                <div>
                    <div className="container">
                        <div className="row mt-5">
                            <h4><span
                                className={'float-left author pr-1'}>{selectedNews.subtitle}: </span> {selectedNews.title}
                            </h4>
                        </div>
                        <div className="row mt-1">
                            <img src={selectedNews.image} alt=""/>
                        </div>
                        <br/>
                        <div className="row">
                            <Markup content={selectedNews.description}></Markup>
                        </div>
                    </div>
                </div>
            ) : <section style={{height: '50vh'}}>
                <Loader/>
            </section>}
        </div>
    );
};

export default News;
