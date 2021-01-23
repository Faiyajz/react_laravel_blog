import React, { Component } from 'react';
import Breadcrumb from '../../breadcrumb/Breadcrumb';

class Add extends Component
{
    render() {
        return (
            <div className="content-wrapper">
                <Breadcrumb/>
                <section className="content">
                    add tags
                </section>
            </div>
        )
    }
}

export default Add;
