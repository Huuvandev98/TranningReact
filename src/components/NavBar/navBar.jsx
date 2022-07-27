import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

NavBar.propTypes = {
    
};

function NavBar(props) {
    return (
            <div className='d-flex justify-content-between'>
                <button className='btn-boder' onClick={props.click} >Create New Task</button>
                <div>
                    <input className='input-boder' type="text" placeholder='Type something to search'></input>
                    <button className='btn-boder'>Search</button>
                </div>
            </div>
    );
}

export default NavBar;