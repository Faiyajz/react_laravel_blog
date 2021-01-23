import React, { Component } from 'react';
import Breadcrumb from '../../breadcrumb/Breadcrumb';

class Index extends Component
{
    render() {
        return (
            <div className="content-wrapper">
                <Breadcrumb/>
                <section className="content">
                    list tags
                </section>
            </div>
        )
    }
}

export default Index;
