import React from 'react';
import PropTypes from 'prop-types';
import './slidebar.css';
SlideBar.propTypes = {
    
};

function SlideBar(props) {
    return (
        <div className='slidebar'>
            <ul>
                <li>All Task</li>
                <li>New Task</li>
                <li>Doing Task</li>
                <li>Done Task</li>
            </ul>
        </div>                                                                                              
    );
}

export default SlideBar;