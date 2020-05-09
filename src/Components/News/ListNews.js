import React from 'react';

const ListNews = () => {
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
                            <img className="img-fluid" src="/assets/images/about.png" alt="Chania" />
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
                                <div className="news-list">
                                    <div className="card post-items">
                                        <img className="card-img-top img-fluid" src="/assets/images/gallery.png"
                                             alt="Card image"
                                             style={{width:'100%'}} />
                                        <div className="card-body">
                                            <div className="d-flex written">
                                                <a href="#">February 18, 2016</a>

                                            </div>
                                            <h4 className="card-title"><a href=""> Tour to<span> Anthocyanin</span></a>
                                            </h4>
                                            <p className="card-text">
                                                Vivamus condimentum purus in lorem molestie fermentum. Nulla
                                                suscipit nibh eu
                                                ultricies pellentesque. Fusce consectetur velit eu…
                                            </p>
                                            <a href="#" className="btn-more">Readmore</a>
                                        </div>
                                    </div>
                                    <div className="card post-items">
                                        <img className="card-img-top img-fluid" src="/assets/images/gallery.png"
                                             alt="Card image"
                                             style={{width:'100%'}} />
                                        <div className="card-body">
                                            <div className="d-flex written">
                                                <a href="#">February 18, 2016</a>

                                            </div>
                                            <h4 className="card-title"><a href=""> Tour to<span> Anthocyanin</span></a>
                                            </h4>
                                            <p className="card-text">
                                                Vivamus condimentum purus in lorem molestie fermentum. Nulla
                                                suscipit nibh eu
                                                ultricies pellentesque. Fusce consectetur velit eu…
                                            </p>
                                            <a href="#" className="btn-more">Readmore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">

                                <div className="category recent">
                                    <h5>Recent Posts</h5>
                                    <ul>
                                        <li className="d-flex">
                                            <div className="re-post">
                                                <img src="/assets/images/Quality_1.png" alt="" />
                                            </div>
                                            <div className="re-consent">
                                                <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                                                <p className="d-flex">
                                                    <span className="recent-posts__date">14.11.2016</span>
                                                    <span className="recent-posts__views">951 views</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="re-post">
                                                <img src="/assets/images/Quality_2.png" alt="" />
                                            </div>
                                            <div className="re-consent">
                                                <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                                                <p className="d-flex">
                                                    <span className="recent-posts__date">14.11.2016</span>
                                                    <span className="recent-posts__views">951 views</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="re-post">
                                                <img src="/assets/images/Quality_3.png" alt="" />
                                            </div>
                                            <div className="re-consent">
                                                <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                                                <p className="d-flex">
                                                    <span className="recent-posts__date">14.11.2016</span>
                                                    <span className="recent-posts__views">951 views</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="re-post">
                                                <img src="/assets/images/Quality_1.png" alt="" />
                                            </div>
                                            <div className="re-consent">
                                                <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                                                <p className="d-flex">
                                                    <span className="recent-posts__date">14.11.2016</span>
                                                    <span className="recent-posts__views">951 views</span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListNews;
