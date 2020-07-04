import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import careerAction from "../../redux/Career/actions";
import {useHistory} from "react-router-dom";
import CareerLoader from "../../Helpers/CareerLoader";

const ListCareers = () => {
    const {initialCareer, careers, loading} = useSelector(state => state.careers);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!initialCareer) {
            dispatch(careerAction.getCareers());
        }
    }, [dispatch, initialCareer]);
    const history = useHistory();
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
                                <span className="breadcrumb-item active">career</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career-box">
                <div className="container">
                    <div className="inner-header">
                        <h3>Get your<span>Careers</span></h3>
                        <p>Get your careers at Anthocyanin, the most preferred Indian exporter of spice Oleoresins and
                            Essential oils by continual improvement in the business technology, up gradation and
                            standardization of the product and process with international accredited standards.
                        </p>
                    </div>
                    <div className="open-positions">
                        <h3>Open Positions</h3>
                        <ul className="career-list">
                            {careers && !loading ? careers.map((data, i) => (
                                <li className="d-flex" key={i}>
                                    <div className="designation">
                                        <h4>
                                            <a href="">{data.title}</a>
                                        </h4>
                                        {data.tags.map((tag,i) => (
                                            <span key={i} className="designation-type">{tag}</span>
                                        ))}

                                    </div>
                                    <div className="location">
                                        <p className="state">{data.location}</p>
                                        <p className="country">{data.country}</p>
                                    </div>
                                    <div className="apply-btn">
                                        <a onClick={() => history.push(`/career/${data.id}`)} className="btn"
                                           role="button">VIEW AND APPLY</a>
                                    </div>
                                </li>
                            )) : (<div>
                                <li className="d-flex">
                                    <CareerLoader/>
                                </li>
                                <li className="d-flex">
                                    <CareerLoader/>
                                </li>
                                <li className="d-flex">
                                    <CareerLoader/>
                                </li>
                            </div>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCareers;
