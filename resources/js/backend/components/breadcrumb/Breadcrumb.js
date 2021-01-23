import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                <li className="active">Dashboard</li>
            </ol>
        );
    }
}


