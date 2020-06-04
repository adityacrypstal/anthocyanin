import React from 'react';
import Recent from "./Recent";
import {useDispatch, useSelector} from "react-redux";
import newsActions from "../../redux/News/actions";
import NewsLoader from "../../Helpers/newsLoader";

const ListNews = () => {
    const {initialNews, news, loading} = useSelector(state => state.news);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if(!initialNews){
            dispatch(newsActions.getNews());
        }
    }, [dispatch, initialNews]);
    const truncate = (str, l) => {
        str = str.toString();
        str = str.replace(/<\/?[^>]+>/gi, '');
        if (str) return str.length > l ? str.substring(0, l) + "..." : str;
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
                                <span className="breadcrumb-item active">News</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-wapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="img-fluid" src="./assets/images/about.png" alt="Chania" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-box">
                <div className="container">

                    <div className="news-box">
                        <div className="inner-header">
                            <h3>Latest<span>News & Events</span></h3>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                {news&&!loading ? news.map((data,i)=>(
                                    <div className="news-list">
                                        <div className="card post-items">
                                            <img className="card-img-top img-fluid" src={data.image}
                                                 alt="Card image"
                                                 style={{width:'100%'}} />
                                            <div className="card-body">
                                                <div className="d-flex written">
                                                    <a href="#">{data.date}</a>

                                                </div>
                                                <h4 className="card-title"><a href=""> {data.subtitle}<span> {data.title}</span></a>
                                                </h4>
                                                <p className="card-text">
                                                   {truncate(data.description,250)}
                                                </p>
                                                <a href={`/news/${data.id}`} className="btn-more">Readmore</a>
                                            </div>
                                        </div>
                                    </div>
                                )):<div>
                                    <div className="news-list"><NewsLoader/></div>
                                    <div className="news-list"><NewsLoader/></div>
                                </div>}
                            </div>
                            <div className="col-md-4">
                                <Recent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListNews;
