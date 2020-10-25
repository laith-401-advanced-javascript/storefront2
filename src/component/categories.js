import React from 'react';

import { connect } from 'react-redux';

import { change } from '../store/categories.js';
import { chooseList } from '../store/products.js';


const Status = props => {

    // console.log('props.current', props);
    return (
    <>
        {/* <h2>{props.current.current}</h2> */}
        {props.current.categories.name.map((item, idx) => {
            return <button key={idx} onClick={()=>  {
                props.change(item);
                props.chooseList(item);
            
            }}  
            
            >  {item}  </button>
        })}
    </>
    )
}

const mapStateToProps = state => {
    // console.log('props::>>',props);
    return {current:state.activator}
}

const mapDispatchToProps = {change , chooseList}


export default connect(mapStateToProps , mapDispatchToProps)(Status)