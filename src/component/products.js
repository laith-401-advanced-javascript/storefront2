import React from 'react';
import { connect } from 'react-redux';
import { chooseList } from '../store/products.js';

const Status = props => {
    // console.log('props >>>',props);
    // console.log('props list .results >>>',props.list.results.name);

    return (
        <>
            {/* <h2>{props.list.results} List</h2> */}
            {props.list.results.map((item, idx) => {
                return <li key={idx}>{item.name}<br />{item.description} <br /> </li>
            })}
        </>
    )
}


const mapStateToProps = state => {
    return state ;
};

const mapDespatchRoProps = {chooseList} ;

export default connect(mapStateToProps,mapDespatchRoProps )(Status)