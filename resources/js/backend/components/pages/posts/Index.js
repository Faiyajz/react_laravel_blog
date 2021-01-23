import React, { Component } from 'react';
import Breadcrumb from '../../breadcrumb/Breadcrumb';

class Index extends Component
{
    constructor(props)
    {
        super(props);

        document.body.classList.remove("login-page");
        document.body.classList.add("skin-green");
    }

    render() {
        return (
            <div className="content-wrapper">
                <Breadcrumb/>
                <section className="content">
                    list posts
                </section>
            </div>
        )
    }
}

export default Index;
