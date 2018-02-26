import React, { Component } from 'react';
import './ParkGame.css';
import { Map, TileLayer, Marker } from 'react-leaflet';
import {parks} from './parks.js';

class Choice extends Component {
  render() {
    let className = "";
    if (this.props.i === 2) {
      className="third";
    }
    return <div className="choice">
      <button className={className} onClick={() => this.props.callback(this.props.label)}>{this.props.label}</button>
    </div>
  }
}

class ParkGame extends Component {
  constructor() {
    super();
    this.state = {
      round: 0,
      correct: 0,
      lat: 40.6998746,
      lon: -73.9918719,
      zoom: 12,
      state: 'choice'
    }

    this.allChoices = parks;
    this.remainingChoices = {real: this.allChoices.real.slice(), fake: this.allChoices.fake.slice()};
  }

  choice(label) {
    if (label === this.correctAnswer.label) {
      // they got it right
      this.setState({
        state: 'right',
        round: this.state.round + 1,
        lat: this.correctAnswer.centroid[1],
        lon: this.correctAnswer.centroid[0],
        pick: label,
        zoom: 14
      });

    } else {
      // they got it wrong
      this.setState({
        state: 'wrong',
        round: this.state.round + 1,
        lat: this.correctAnswer.centroid[1],
        lon: this.correctAnswer.centroid[0],
        pick: label,
        zoom: 14
      });        
    }
  }

  nextQuestion(correct) {
    this.setState({
      zoom: 12,
      state: 'choice',
      correct: this.state.correct + correct});
  }

  render() {
    var controls;

    // display special options for wrong/right
    if (this.state.state === 'wrong') {
      controls = <div id="controls" className="wrong" onClick={()=>this.nextQuestion(0)}>
        <div id="instructions">
          {"Oops.  " + this.state.pick + " is actually fake. "}
          <span className="park">{this.correctAnswer.label}</span>
          {" was a real park in " + this.correctAnswer.borough + "."}
        </div>
        <div id="next">Next question.</div>
      </div>;

    } else if (this.state.state === 'right') {
      controls = <div id="controls" className="right" onClick={()=>this.nextQuestion(1)}>
        <div id="instructions">
          {"Yes! "}
          <span className="park">{this.correctAnswer.label}</span>
          {" is a park in " + this.correctAnswer.borough + "."}
        </div>
        <div id="next">Next question.</div>
      </div>;

    } else {

      // if it's the end, we display a special message
      if (this.state.round === 10) {
        var evaluation;
        if (this.state.correct >= 7) {
          evaluation = 'Congratulations!';
        } else if (this.state.correct >= 5) {
          evaluation = 'Better luck next time.';
        } else {
          evaluation = 'Maybe you should go outside.';
        }

        controls = <div id="controls">
          <div id="score">{this.state.correct + "/10"}</div>
          <div id="score-outro">{evaluation}</div>
        </div>

      } else {
        // otherwise, we pick some options to present to the player

        var correctPos = Math.floor(Math.random()*3);
        let choices = [];

        for (var i = 0; i < 3; i++) {
          var choice;
          var label;

          if (i === correctPos) {
            choice = Math.floor(Math.random() * this.remainingChoices.real.length);
            label = this.remainingChoices.real[choice].label;
            this.correctAnswer = this.remainingChoices.real[choice];
            this.remainingChoices.real.splice(choice, 1);
          } else {
            choice = Math.floor(Math.random() * this.remainingChoices.fake.length);
            label = this.remainingChoices.fake[choice];
            this.remainingChoices.fake.splice(choice, 1);
          }

          choices.push(<Choice callback={this.choice.bind(this)} label={label} key={label} i={i}/>);
        }

        var intro;
        if (this.state.round === 0 && this.state.round < 10) {
          intro = <div className="intro"><p>
          New York City has over two thousand named parks.
          Since it seems like it could use still use a few more, I trained an RNN to imagine names for some new public spaces.
          </p>
          <p>
            Do you know NYC's parks well enough to tell the real deal from a machine dream?
          </p></div>;
        } else {
          intro = [];
        }

        controls = <div id="controls">
          <div id="instructions">
            {intro}
            <div className="question">
              Which one is a real NYC park?
            </div>
            <div className="round">{(this.state.round === 0 ? "Round " : "") + (this.state.round+1) + "/10"}</div>
          </div>

          <div id="choices">
            {choices}
          </div>
        </div>;
      }
    }
    
    var parkMarker = [];
    if (this.state.round > 0 && (this.state.state !== 'choice' || this.state.round < 10)) {
      parkMarker = <Marker position={[this.state.lat, this.state.lon]} />;
    }

    return (
      <div id="main">
        {controls}
        <div id="background-map">
          <Map center={[this.state.lat, this.state.lon]} zoom={this.state.zoom} >
            <TileLayer
              url="https://api.mapbox.com/styles/v1/loganw/cjdv6gqfd3x642spkofc8cb86/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibG9nYW53IiwiYSI6IlQzWHJqc3cifQ.KY3j-syHXeYmI69JmLqGqQ"
            />
            {parkMarker}
          </Map>
        </div>
      </div>
    );
  }
}

export default ParkGame;
