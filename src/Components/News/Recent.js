import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import newsActions from "../../redux/News/actions";
import RecentLoader from "../../Helpers/recentLoader";

const Recent = () => {
    const {recent, loadingRecent} = useSelector(state => state.news);
    const dispatch = useDispatch();
    React.useEffect(() => {
            dispatch(newsActions.getRecent());
    }, [dispatch]);
    return (
        <div className="category recent">
            <h5>Recent News</h5>
            <ul>
                {recent&&!loadingRecent ? recent.map((data,i)=>(
                    <li className="d-flex" key={i}>
                        <div className="re-post">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="re-consent">
                            <h4>{data.title}</h4>
                            <p className="d-flex">
                                <span className="recent-posts__date">{data.date}</span>
                                {/*<span className="recent-posts__views">{data.views} views</span>*/}
                            </p>
                        </div>
                    </li>
                )):(
                    <div>
                        <li className="d-flex"><RecentLoader/></li>
                        <li className="d-flex"><RecentLoader/></li>
                        <li className="d-flex"><RecentLoader/></li>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Recent;
