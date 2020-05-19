import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import blogAction from "../../redux/Blog/actions";
import Loader from "../Common/Loader";
import BlogLoader from "../../Helpers/blogLoader";
import moment from 'moment';
import {Markup} from 'interweave';

const ListBlog = () => {
    const {initialBlog, blogs, loading} = useSelector(state => state.blogs);
    const dispatch = useDispatch();
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
                            <div className="col-md-4">
                                <div className="card post-items" key={i}>
                                    <img className="card-img-top img-fluid" src={data.title_image}
                                         alt="Card image"
                                         style={{width: '100%'}}/>
                                    <div className="card-body">
                                        <div className="d-flex written">
                                <span>
                                    by <a href="#">
                                        {data.author || 'Author'} </a>
                                </span>
                                            <a href="#">{moment(data.created_at).format('DD-MM-YYYY')}</a>

                                        </div>
                                        <h4 className="card-title"><a href={`/blog/${data.id}`}> {data.subtitle}<span> {data.title}</span></a>
                                        </h4>
                                        <Markup
                                            content={'<p><u><br></u></p><p><u>Abstract Photography:</u></p><p><b style=\\"color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px;\\">Abstract photography</b><span style=\\"color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px;\\">, sometimes called non-objective, experimental, conceptual or concrete&nbsp;</span><b style=\\"color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px;\\">photography</b><span style=\\"color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px;\\">, is a means of depicting a visual image that does not have an immediate association with the object world and that has been created through the use of photographic equipment, processes or materials</span></p><p><span style=\\"color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px;\\"><br></span>&nbsp; &nbsp;</p><h2 style=\\"text-align: justify; padding: 0px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; line-height: normal; width: 630px; background-color: rgb(235, 235, 235);\\"><br></h2>'}/>


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


