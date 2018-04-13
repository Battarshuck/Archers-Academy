// import
import React, { Component } from 'react';
import navPic from '../assets/logo.png';
import tipsolahraga from '../assets/tipsolahraga.jpg';
import board from '../assets/board.jpg';
import longboard from '../assets/longboard.jpg';
import coachLogo from '../assets/coachLogo.png';

//components
import Announcement from '../Announcement/Announcement';

import './App.css';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Announcements: [
        {
          'title': 'well done!',
          'description': 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
          'note': 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.'
        },
        {
          'title': 'test',
          'description': 'test',
          'note': 'test'
        }
      ]
    };

    //bind functions
    this.AnnouncementCreater = this.AnnouncementCreater.bind(this);
  }

  AnnouncementCreater = () => {
    const list = this.state.Announcements.map((announcement) =>
      <Announcement title={announcement.title} description={announcement.description} note={announcement.note} />
    );
    return (list);
  }

  render() {
    return (
      <div className="App">
        <div className="PersonnelNavbar">
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbarcolor navpadding">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src={navPic}></img>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Branches</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    more
            </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>



        <div className="sectionColor">
          <div className="wrapper">
            <div className="jumbotron jumbotron-fluid jumbotronModified">
              <div className="container">
                <img className="display-3" src="https://static.wixstatic.com/media/152aef_55aed5c543774335985696d9490acb58~mv2.png/v1/crop/x_12,y_0,w_672,h_209/fill/w_383,h_120,al_c,usm_0.66_1.00_0.01/152aef_55aed5c543774335985696d9490acb58~mv2.png"></img>
                <p className="lead">ONE TEAM...ONE TARGET</p>
              </div>
            </div>
            <div id="mainSection" className="container-fluid">
              <div className="row">
                <div className="col-md-3"></div>

                <div id="carouselExampleControls" className="carousel slide col-md-6 carouselPadding" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img className="d-block img-fluid imgMain" src={tipsolahraga} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid imgMain" src={board} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid imgMain" src={longboard} alt="Third slide"></img>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="announcementSection">
          <div className="container-fluid">
            <div className="header">
              <h1>Announcements <span class="badge badge-danger">New</span></h1>
            </div>

            {this.AnnouncementCreater()}

          </div>
        </div>

        <div className="sectionLight">
          <div className="coachSection">
            <div className="row">
              <div className="col-md-2">
                <img src={coachLogo}></img>
              </div>

              <div className="col-md-8">
                <div className="coach1">
                  <div className="row">
                    <img className="col-md-3" src="https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/16938901_178531519315713_1326279842698755678_n.jpg?_nc_cat=0&oh=1fb756de7e63be365467d40b68466c45&oe=5B75D0F5"></img>
                    <p className="col-md-9 text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae,
                      eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
                      piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus
                sit amet fermentum.</p>
                  </div>
                </div>
                <div className="coach2">
                  <div className="row">
                    <p className="text-justify col-md-9">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae,
                      eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
                      piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus
                sit amet fermentum.</p>
                    <img className="col-md-3" src="https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-1/p160x160/13770380_10157285747545145_4019445058020303100_n.jpg?_nc_cat=0&oh=a91abb44330e5e93af8fa34c9a589220&oe=5B6A8478"></img>
                  </div>
                </div>
              </div>

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
