import React, { Component } from 'react';
import Breadcrumb from '../../breadcrumb/Breadcrumb';

class Edit extends Component
{
    render() {
        return (
            <div className="content-wrapper">
                <Breadcrumb/>
                <section className="content">
                    edit tags
                </section>
            </div>
        )
    }
}

export default Edit;
