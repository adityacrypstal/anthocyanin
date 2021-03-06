import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import careerAction from "../../redux/Career/actions";
import {useHistory} from "react-router-dom";
import CareerLoader from "../../Helpers/CareerLoader";

const ListCareers = () => {
    const {initialCareer, careers, loading,totalCount, page:currentPage, totalPages} = useSelector(state => state.careers);
    const dispatch = useDispatch();
    const [page, setPage]= useState(1);
    React.useEffect(() => {
        if (!initialCareer) {
            dispatch(careerAction.getCareers(page));
        }
    }, [dispatch, initialCareer, page]);
    const history = useHistory();
    const handleChange = (e) =>{
        setPage(e);
        dispatch(careerAction.getCareers(e))
    };
    const pages = () =>{
        let items = [];
        for(let i = 1; i <= totalPages; i++){
            items.push(<li className={`page-item ${page===i ? 'active' : ''}`}><a className="page-link" onClick={()=>handleChange(i)}>{i}</a></li>)
        }
        return items
    };

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
                                   <div className={'carreerList'}>
                                       <div className="location">
                                           <p className="state">{data.location}</p>
                                           <p className="country">{data.country}</p>
                                       </div>
                                       <div className="apply-btn">
                                           <a onClick={() => history.push(`/career/${data.id}`)} className="btn"
                                              role="button">VIEW AND APPLY</a>
                                       </div>
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
                        <nav aria-label="Page navigation example" style={{display:`${totalCount>5 ? 'block':'none'}`}}>
                            <ul className="pagination justify-content-end">
                                {page!=1?<li className="page-item"><a className="page-link" onClick={()=>handleChange(page-1)}>Previous</a></li>:null}
                                {pages()}
                                {page!=totalPages?<li className="page-item"><a className="page-link"onClick={()=>handleChange(page+1)}>Next</a></li>:null}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCareers;
