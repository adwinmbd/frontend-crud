import React from 'react'

export default function About(){
    return(
        <div className="row is-center">
            <div className="col-10 col-5-md">
                <div className="card">
                    <header>
                        <h4>About</h4>
                    </header>
                    <p>
                        This is an SPA made with&nbsp; 
                        <a href="https://miragejs.com">Mirage</a> and&nbsp; 
                        <a href="https://reactjs.org">React</a>. It has two routes to
                        help demonstrate how Mirage's in-memory database enables
                        realistic data fetching and persisting during a single
                        application session.
                    </p>
                    <p>
                        Mirage's state is reset whenever the application is
                        reloaded.
                    </p>
                </div>
            </div>
      </div>
    )
}