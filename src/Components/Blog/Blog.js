import React from 'react';
import {useParams, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import blogsAction from "../../redux/Blog/actions";
import Loader from "../Common/Loader";
import {Markup} from "interweave";
import moment from "moment";
import './style.css'
const Blog = () => {
    const match = useRouteMatch();
    const {id} = useParams() || 0
    const {loading, selectedBlog} = useSelector(state => state.blogs);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (id) {
            dispatch(blogsAction.getBlog(id));
        }
    }, [dispatch, id]);
    console.log(selectedBlog, 'testing');
    return (
        <div>
            {selectedBlog ? (
                <div>
                    <div className="container">
                        <div className="row mt-5">
                                <h1>{selectedBlog.title}</h1>
                        </div>
                        <div className="row">
                            <div className={'float-left author'}>AUTHOR : <i>{selectedBlog.author||'ADMIN'}</i></div> ||
                            <div className={'float-right posted'}>POSTED ON : <i>{moment(selectedBlog.created_at).format('Do MMMM YYYY')}</i></div>
                        </div>
                        <div className="row">
                            <Markup content = {selectedBlog.content}></Markup>
                        </div>
                    </div>
                </div>
            ) : <section style={{height:'50vh'}}>
                <Loader/>
            </section>}
        </div>
    );
};

export default Blog;
