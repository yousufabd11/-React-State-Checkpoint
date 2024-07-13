import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Yousuf Abdirahman",
        bio: "A passionate developer.",
        imgSrc: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: Date.now()
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, mountedTime } = this.state;
    const timeSinceMounted = Math.floor((Date.now() - mountedTime) / 1000);

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide" : "Show"} Profile
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt="profile" />
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <div>
          <p>Time since component mounted: {timeSinceMounted} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
