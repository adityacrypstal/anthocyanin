import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import blogAction from "../../redux/Blog/actions";
import Loader from "../Common/Loader";
import {useHistory} from 'react-router-dom';
import BlogLoader from "../../Helpers/blogLoader";
import moment from 'moment';
import {Markup} from 'interweave';

const ListBlog = () => {
    const {initialBlog, blogs, loading} = useSelector(state => state.blogs);
    const dispatch = useDispatch();
    const history = useHistory()
    React.useEffect(() => {
        if (!initialBlog) {
            dispatch(blogAction.getBlogs());
        }
    }, [dispatch, initialBlog]);
    const truncate = (str) => {
        if (str) return str.length > 60 ? str.substring(0, 56) + "..." : str;
    }
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
                                <span className="breadcrumb-item active">Blog</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-wapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="img-fluid" src="./assets/images/about.png" alt="Chania"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-wapper">
                <div className="container">
                    <div className="inner-header">
                        <h3>Blog</h3>
                    </div>
                    <div className="row mx-0">
                        {blogs.length ? blogs.map((data, i) => (
                            <div className="col-md-4" key={i}>
                                <div className="card post-items" onClick={()=>history.push(`/blog/${data.id}`)} >
                                    <div className={'card-img-custom'} style={{backgroundImage:`url(${data.title_image})`}}>

                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex written">
                                <span>
                                    by <a href="#">
                                        {data.author || 'Author'} </a>
                                </span>
                                            <a href="#">{moment(data.created_at).format('DD-MM-YYYY')}</a>

                                        </div>
                                        <h4 className="card-title blog-head"><a href=""> {data.subtitle}<span> {data.title}</span></a>
                                        </h4>
                                        <Markup
                                            content={data.content}/>
                                    </div>
                                </div>
                            </div>
                        )) : <div className={"row"}>
                            <div className="col-md-4"><BlogLoader/></div>
                            <div className="col-md-4"><BlogLoader/></div>
                            <div className="col-md-4"><BlogLoader/></div>
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListBlog;


