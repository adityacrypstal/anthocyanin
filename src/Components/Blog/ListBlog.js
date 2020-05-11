import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import blogAction from "../../redux/Blog/actions";
import Loader from "../Common/Loader";
import BlogLoader from "../../Helpers/blogLoader";

const ListBlog = () => {
    const {initialBlog, blogs, loading} = useSelector(state => state.blogs);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialBlog) {
            dispatch(blogAction.getBlogs());
        }
    }, [dispatch, initialBlog]);
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
                            <img className="img-fluid" src="/assets/images/about.png" alt="Chania"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-wapper">
                <div className="container">
                    <div className="inner-header">
                        <h3>Blog</h3>
                    </div>
                    <div className="row">
                        {blogs&&!loading ? blogs.map((data, i) => (
                            <div className="col-md-4">
                                <div className="card post-items" key={i}>
                                    <img className="card-img-top img-fluid" src={data.img}
                                         alt="Card image"
                                         style={{width: '100%'}}/>
                                    <div className="card-body">
                                        <div className="d-flex written">
                                <span>
                                    by <a href="https://jevelin.shufflehound.com/author/shufflehound/">
                                        {data.author} </a>
                                </span>
                                            <a href="#">{data.date}</a>

                                        </div>
                                        <h4 className="card-title"><a href=""> {data.subtitle}<span> {data.title}</span></a>
                                        </h4>
                                        <p className="card-text">
                                            {data.desc}
                                        </p>

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


