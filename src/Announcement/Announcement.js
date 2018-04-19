import React, { Component } from 'react';
import './Announcement';

class Announcement extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="Announcements col-md-8 col-sm-12">
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">{this.props.title}</h4>
                            <p>{this.props.description}</p>
                            <hr></hr>
                            <p class="mb-0">Note: {this.props.note}</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default Announcement;