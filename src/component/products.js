import React from 'react';

import { connect } from 'react-redux';

import { chooseList } from '../store/products.js';

const Status = props => {
    // console.log('props list>>>',props.list);
    // console.log('props list .results >>>',props.list.results.name);

    return (
        <>
            {/* <h2>{props.activator.products} List</h2> */}
            {props.list.results.map((item, idx) => {
                return <li key={idx}>{item}</li>
            })}
        </>
    )
}


const mapStateToProps = state => {
    return state ;
};

const mapDespatchRoProps = {chooseList} ;

export default connect(mapStateToProps,mapDespatchRoProps )(Status)