import React, { Component } from 'react'

class Home extends Component {
    render () {
        return (
            <div>
                <section className="hero is-success is-fullheight">
                    <div className="hero-head">
                        <header className="nav">
                            <div className="container">
                                <div className="nav-left">
                                    <a className="nav-item">
                                        <img src="assets/img/logo-mark.png" alt="Logo" />
                                    </a>
                                </div>
                                
                                <span className="nav-toggle" >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                
                                
                                <div classNameName="nav-right nav-menu" >
                                    <span classNameName="nav-item">
                                        <a classNameName="button">
                                            <span classNameName="icon">
                                                <i classNameName="fa fa-map-marker"></i>
                                            </span>
                                            <span>LOCATION</span>
                                        </a>
                                    </span>
                                    <span classNameName="nav-item">
                                        <a className="button">
                                            <span> LOGIN / SIGNUP</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div className="hero-body">
                        <div className="overlay"></div>
					    <video autoplay loop muted className="headervid">
                            <source src="assets/vid/bg.mp4" type="video/mp4" />
                            <source src="assets/vid/bg.ogg" type="video/ogg" />
                            <p>Your browser doesn't support video</p>
					    </video>
                        <div className="container has-text-centered">
                            <div className="parent"><img src="assets/img/bg.png" /></div>
                            <br/>
                            <div className="field has-addons has-addons-centered">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" placeholder="Search musicians, cafes, pubs..." />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </p>
                                <p className="control">
                                    <span className="select">
                                        <select>
                                            <option>MUSICIANS</option>
                                            <option>CAFES</option>
                                            <option>RESTAURANTS</option>
                                        </select>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="nav has-shadow initial-header">
                <div className="container">
                    <div className="nav-left">
                    <a className="nav-item is-hidden-desktop">
                        <img src="assets/img/logo-mark.png" alt="PlugInBaby logo" />
                    </a>
                    <a className="nav-item is-hidden-mobile">
                        <div className="field has-addons has-addons-centered">
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="Search musicians, cafes, pubs..." />
                            <span className="icon is-small is-left">
                            <i className="fa fa-search"></i>
                            </span>
                        </p>
                        <p className="control">
                            <span className="select">
                            <select>
                                <option>MUSICIANS</option>
                                <option>CAFES</option>
                                <option>RESTAURANTS</option>
                            </select>
                            </span>
                        </p>
                        </div>
                    </a>
                    </div>
                    <div className="nav-center">
                    <a className="nav-item">
                        <img src="assets/img/logo.png" alt="PlugInBaby logo" />
                    </a>
                    </div>
                    <span className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                    </span>
                    <div className="nav-right nav-menu">
                    <span className="nav-item">
                    <a className="button">
                            <span className="icon">
                                <i className="fa fa-map-marker"></i>
                            </span>
                            <span>LOCATION</span>
                    </a>
                    </span>
                    <span className="nav-item">
                    <a className="button">
                            <span> LOGIN / SIGNUP</span>
                    </a>
                    </span>
                    </div>
                </div>
                </nav>
<div className="columns">
  <div className="column is-4">
    <div className="block">
      <div className="columns is-mobile"> 
        <div className="column is-two-thirds">
          <p className="notification title is-4">
            OPENINGS
          </p>
        </div>
        <div className="column button-pad">
          <div className="notification">
            <p className="control">
              <span className="select">
                <select>
                  <option className="title is-6" hidden>SORT BY</option>
                  <option className="title is-6">NEWEST</option>
                  <option>OLDEST</option>
                  <option>POPULAR</option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
   </div>
    {/*<div className="columns is-mobile" *ngFor="let job of jobOpening"> 
        <div className="column is-two-thirds">
          <p className="notification">
            {{job.eventName}}<br/>
            {{job.address}}<br/>
            {{job.place}}
            
          </p>
        </div>
        <div className="column">
          <p className="notification is-warning">
            {{job.date}}<br/><br/>
            <a routerLink="{{job.link}}" >Details</a>
          </p>
        </div>
      </div>*/}
   
  </div>
  <div className="column auto">
    <div className="notification">
        <div className="tabs is-right">
          <ul>
            <li className="is-active"><a>Recommended</a></li>
            <li><a>Running Now</a></li>
            <li><a>Upcoming</a></li>
          </ul>
        </div>
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut Lorem ipsum doler siut 
        
    </div>
    
  </div>
</div>
            </div>
        )
    }
}

export default Home;