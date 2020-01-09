/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ErrorIndicator = () => {
    return(
        <div className="error-indocator">
            <span className="boom" >BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but wa already sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;