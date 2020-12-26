import React from 'react'

export default function About(){
    return(
        <div className="columns is-centered">
            <div className="column is-5-tablet is-10-mobile">
                <div className="card">
                <header className="header">
                    <p className="card-header-title heading">
                    About
                    </p>
                </header>
                <div className="card-content">
                    <p className="top">
                    This is an SPA made with&nbsp;
                    <a href="https://miragejs.com">Mirage</a> and&nbsp;
                    <a href="https://reactjs.org">React</a>. It has two routes to
                    help demonstrate how Mirage's in-memory database enables
                    realistic data fetching and persisting during a single
                    application session.
                    </p>
                    <p className="top">
                    Mirage's state is reset whenever the application is
                    reloaded.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}