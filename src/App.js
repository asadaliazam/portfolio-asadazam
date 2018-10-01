import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Grid from '@material-ui/core/Grid';






const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class App extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>Projects</List>
        <Divider />
        <List>Snippets</List>
      </div>
    );


    return (
      <div>
        <header>
          <Button onClick={this.toggleDrawer('left', true)}><FontAwesomeIcon icon={faBars} /></Button>
          <h2> Portfolio </h2>
        </header>
        <div className="landing-header">
          <div className="landing-picture">
          <img className="mobile" src="./images/headerPicture1.jpeg" alt="person coding" />
          <img className="web" src="./images/headerPicture-web.jpg" alt="person coding" />



          </div>
          <div className="contact-card">
            <h2>Asad Azam</h2>
            <h4>Full Stack Developer</h4>
            <p><FontAwesomeIcon icon={faPhoneSquare} /> (778) 598-3440</p>
            <p><FontAwesomeIcon icon={faEnvelopeSquare} /> asadaliazam1@gmail.com</p>
            <Grid alignContent='center' container spacing={8}>
  <Grid item xs={4}>
<Button variant="contained"  className="contact-button">
        Github
<FontAwesomeIcon icon={faGithubSquare} />      </Button>
</Grid>
<Grid item xs={4}>

<Button variant="contained" className="contact-button" >
Linkedin
<FontAwesomeIcon icon={faLinkedin} />      </Button>
</Grid>
</Grid>
           </div>
        </div>

        <div className="skills-section">
          <h2> <span>Sk</span>ills </h2>
          <div className = "icons">
            <div className="icon">
            <img src="./images/icons/react.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/express.svg" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/javascript.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/html.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/css.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/java.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/jquery.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/node.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/selenium.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/sql.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/firebase.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/heroku.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/php.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/wordpress.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/aws.png" alt="react icon" />
            </div>
            <div className="icon">
            <img src="./images/icons/sass.svg" alt="react icon" />
            </div>

          </div>
        </div>

        <div className="projects-section">
          <h2> <span>Pr</span>ojects </h2>



          <div className="project" onClick={()=> window.open("http://mylinux.langara.bc.ca/~aazam00/magazine/", "_blank")}>

            <div className="project-image">
              <img src="./images/projects/golazo.png" alt="golazo icon" />
            </div>
            <div className="project-description">
                {/* <a href="http://mylinux.langara.bc.ca/~aazam00/magazine/" target="_blank"> */}
                  <h3> Golazo - A Magazine for sports lovers </h3>
                {/* </a> */}

              <p> A sports news website built with HTML 5 and CSS 3 </p>
            </div>
          </div>


          <div className="project">
            <div className="project-image">
              <img src="./images/projects/race.png" alt="race icon turtle" />
            </div>
            <div className="project-description">
              <h3> Hare and Tortoise Race </h3>
              <p> A Simulation Game built with HTML 5, CSS and jQuery </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src="./images/projects/puzzle.png" alt="puzzle icon turtle" />
            </div>
            <div className="project-description">
              <h3> 3 x 3 Puzzle Game </h3>
              <p> A Puzzle Game built with HTML 5, CSS and jQuery. The objective of the player is to make the image as described by moving pieces around. </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src="./images/projects/trixie.png" alt="puzzle icon turtle" />
            </div>
            <div className="project-description">
              <h3> Trixie - Dog Training App </h3>
              <p> An App built using HTML/CSS for the Front End Designing and jQuery for the Back-End of the project and using Adobe PhoneGap as the development framework. The purpose of the app was to allow dog owners to train their dogs in a way that is cost-free and easily manageable from the comfort of their homes. </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src="./images/projects/sherry.png" alt="puzzle icon turtle" />
            </div>
            <div className="project-description">
              <h3> Sherry's Shake Shack </h3>
              <p> An online store for a small café selling ice-creams and shakes. Using PHP and HTML to develop the content and CSS and SASS to design the structure of the website. Our team managed to create this website in two weeks and it can be viewed live at </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src="./images/projects/eatery.png" alt="forn and knife icon turtle" />
            </div>
            <div className="project-description">
              <h3> The Eatery Website </h3>
              <p> A website built with HTML5 and CSS3 combining the latest modules like FlexBox and Grid </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src="./images/projects/eduvisors.png" alt="puzzle icon turtle" />
            </div>
            <div className="project-description">
              <h3> Eduvisors </h3>
              <p> Developed a student advisory system using ExpressJS and SQLite as the backend and ReactJS for the front-end. The Web App allows users to see school recommendations based on their preferences. The site can be viewed live at www.eduvisors.ca. </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src="./images/projects/tic.png" alt="tic tac toe icon turtle" />
            </div>
            <div className="project-description">
              <h3> Tic-Tac-Toe </h3>
              <p> A tic-tac-toe game built with Java SE. The user can play a simple game of tic-tac-toe with a friend by inputting the location of his move. </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src="./images/projects/poker.png" alt="poker icon" />
            </div>
            <div className="project-description">
              <h3> Poker Simulator </h3>
              <p> A poker game simulation built with Java. The user can compare two randomly generated hands of poker and test which hand is better. </p>
            </div>
          </div>

        </div>



        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>


      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
