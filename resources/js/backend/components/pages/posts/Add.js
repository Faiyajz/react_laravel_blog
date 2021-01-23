import React, { Component } from 'react';
import Breadcrumb from '../../breadcrumb/Breadcrumb';

class Add extends Component
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
                    add posts
                </section>
            </div>
        )
    }
}

export default Add;
