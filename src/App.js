import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class Choice extends Component {
  render() {
    return <div className="choice">
      <button onClick={() => this.props.callback(this.props.label)}>{this.props.label}</button>
    </div>
  }
}

class App extends Component {
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

    this.allChoices = {
      fake: ["Harlem Rock Mantis Garden",
        "Bill Triangle",
        "Easterson Community Garden",
        "Corollane Square",
        "Shavive Crive Playground",
        "Bridge Triangle",
        "Dogh Troan Blament Green Momburs Playground",
        "Do Dorgson Park",
        "Colenall Kill Playground",
        "Fort Copaniel Park",
        "Edane Rood Garden Promenade",
        "Arsons Playground",
        "Corporal Playground",
        "Rockal Boodsy Tot Garden",
        "Beantray Playground",
        "Metfams Woods",
        "Nitherbet Reptentet Grove",
        "Vaquall Plaza",
        "Forrohm Park",
        "Kill Park",
        "Baty Glacker Square",
        "Aveolic Tree",
        "Dyck Playground",
        "Hutton Parkway",
        "Haralt Playground",
        "Joshe Sapvay Triangle",
        "Jarday Belon Park/Eell Playground",
        "Bloopin Playground",
        "Seber Rackath Community Garden",
        "107 Maxil-Audalce Park",
        "LaGlea Park",
        "Williort Tuth Brockston Playground",
        "Walkie Square",
        "Haven Walk",
        "Bellfool Square",
        "Undrilling Park",
        "Da Park",
        "McKittre Playground",
        "Turfley Community Gray Malls",
        "Pander Park",
        "Whitefist S. Chace Park",
        "Park Avenue Wildsrock Memorial Garden",
        "The Public Piles",
        "Private William Graen Park",
        "Kennedy Of Bay Park",
        "Sh'ma Yauba",
        "Le Playground",
        "Fort Park",
        "Sidge Tree Park",
        "West West Street Park",
        "Peed Beorn River Park",
        "Loh Inland Garden",
        "Jove Walk",
        "St. Family Ground",
        "Hackass Playground",
        "Brookwald Park",
        "Macker Roon Grand Garden"],
      real: [{'borough': 'Queens',
        'centroid': [-73.72964100891133, 40.710481246670994],
        'label': 'Hempstead Bench Spread'},
       {'borough': 'The Bronx',
        'centroid': [-73.90758062437571, 40.868767391037665],
        'label': 'Heath Triangle'},
       {'borough': 'Brooklyn',
        'centroid': [-73.88954798556495, 40.66873409732214],
        'label': 'Big Red Garden'},
       {'borough': 'The Bronx',
        'centroid': [-73.92893785473821, 40.832580494817854],
        'label': 'Taqwa Community Farm'},
       {'borough': 'Staten Island',
        'centroid': [-74.18506669059798, 40.528608267437534],
        'label': 'Arbutus Woods Park'},
       {'borough': 'Brooklyn',
        'centroid': [-73.88737951006146, 40.67374500534257],
        'label': 'Mw United Orient Grand Lodge'},
       {'borough': 'The Bronx',
        'centroid': [-73.89110872365988, 40.85091557190217],
        'label': 'Quarry Ballfields'},
       {'borough': 'The Bronx',
        'centroid': [-73.90393500945534, 40.87661240680293],
        'label': 'Siren Slope'},
       {'borough': 'The Bronx',
        'centroid': [-73.90452359290192, 40.82962891464117],
        'label': 'Genesis Park Community Garden'},
       {'borough': 'Staten Island',
        'centroid': [-74.10379870918015, 40.601264463470855],
        'label': "Reed's Basket Willow Swamp Park"},
       {'borough': 'The Bronx',
        'centroid': [-73.86531088366281, 40.83516061598851],
        'label': 'Wood Park'},
       {'borough': 'The Bronx',
        'centroid': [-73.9192763957586, 40.808934938235744],
        'label': 'Saw Mill Playground'},
       {'borough': 'Queens',
        'centroid': [-73.85713312579631, 40.735583973261754],
        'label': 'Real Good Park'},
       {'borough': 'Manhattan',
        'centroid': [-73.97034901599162, 40.74863587350776],
        'label': 'Trygve Lie Plaza'},
       {'borough': 'Manhattan',
        'centroid': [-73.98815226350432, 40.71233696369315],
        'label': 'Little Flower Playground'},
       {'borough': 'Manhattan',
        'centroid': [-74.00406006096767, 40.7061835222943],
        'label': 'Imagination Playground'},
       {'borough': 'Queens',
        'centroid': [-73.93831137678819, 40.75855657489103],
        'label': 'Sixteen Oaks Grove'},
       {'borough': 'The Bronx',
        'centroid': [-73.91276486178165, 40.80465659151697],
        'label': 'Gouverneur Morris Triangle'},
       {'borough': 'Brooklyn',
        'centroid': [-74.00824665302103, 40.65256557761376],
        'label': 'Gonzalo Plasencia Playground'},
       {'borough': 'The Bronx',
        'centroid': [-73.83690443037801, 40.88703694641804],
        'label': 'Seton Falls Park'},
       {'borough': 'Queens',
        'centroid': [-73.94538181193744, 40.746088771797645],
        'label': 'Short Triangle'},
       {'borough': 'The Bronx',
        'centroid': [-73.88249664539956, 40.84702887352889],
        'label': 'Volky Garden & Flowers'},
       {'borough': 'Brooklyn',
        'centroid': [-73.90962985658723, 40.658990584359366],
        'label': 'Gethsemane Garden'},
       {'borough': 'Brooklyn',
        'centroid': [-73.89215777363563, 40.65202902853406],
        'label': 'Breukelen Ballfields'},
       {'borough': 'Manhattan',
        'centroid': [-73.94008962299623, 40.822739039684926],
        'label': 'Robert L. Clinkscales Playground and Community Garden'},
       {'borough': 'Staten Island',
        'centroid': [-74.15190744624473, 40.547021217477045],
        'label': 'Great Kills Park'},
       {'borough': 'Manhattan',
        'centroid': [-73.94082964198766, 40.81719283479323],
        'label': 'Abyssinian Tot Lot'},
       {'borough': 'Brooklyn',
        'centroid': [-73.91360320250794, 40.666849383309064],
        'label': "Jes Good Rewards Childeren's Garden"},
       {'borough': 'The Bronx',
        'centroid': [-73.85972739556927, 40.8222480674394],
        'label': 'Space Time Playground'},
       {'borough': 'Queens',
        'centroid': [-73.83493314428502, 40.7019816287921],
        'label': 'Jacob Riis Triangle'},
       {'borough': 'Brooklyn',
        'centroid': [-73.95318719881763, 40.61089063364763],
        'label': 'Corporal Wiltshire Square'},
       {'borough': 'Staten Island',
        'centroid': [-74.1493033361545, 40.6101301268926],
        'label': 'Gaeta Park'},
       {'borough': 'Brooklyn',
        'centroid': [-73.93998115491077, 40.59789741451691],
        'label': 'Herman Dolgon Playground'},
       {'borough': 'Staten Island',
        'centroid': [-74.15829806042483, 40.642222270173235],
        'label': 'Shooters Island'},
       {'borough': 'Brooklyn',
        'centroid': [-73.98907988163049, 40.70112392318013],
        'label': 'Clumber Corner'},
       {'borough': 'Brooklyn',
        'centroid': [-73.98509290516556, 40.573875979725386],
        'label': 'Abe Stark Skating Rink'},
       {'borough': 'Brooklyn',
        'centroid': [-73.96544132126145, 40.708532438756585],
        'label': 'Epiphany Playground'},
       {'borough': 'Brooklyn',
        'centroid': [-73.94929383280582, 40.70924712870367],
        'label': 'Ten Eyck Plaza'},
       {'borough': 'Brooklyn',
        'centroid': [-73.89916945827606, 40.64641082258548],
        'label': '100% Playground'},
       {'borough': 'Staten Island',
        'centroid': [-74.0723766717902, 40.59932109794752],
        'label': 'Staats Circle'},
       {'borough': 'Brooklyn',
        'centroid': [-73.94358618913078, 40.69028784156252],
        'label': 'Hattie Carthan Herb Farm'},
       {'borough': 'Manhattan',
        'centroid': [-73.94340210612474, 40.813775046584226],
        'label': 'Margrichante Garden'},
       {'borough': 'Manhattan',
        'centroid': [-73.9840295844803, 40.714192538326905],
        'label': 'Sol Lain Plgd'},
       {'borough': 'Queens',
        'centroid': [-73.92165934408754, 40.74752669466986],
        'label': 'Torsney Playground'},
       {'borough': 'Brooklyn',
        'centroid': [-73.88434788435877, 40.66867066024794],
        'label': 'Warwick Street Greenery Glow Garden'},
       {'borough': 'The Bronx',
        'centroid': [-73.8814991623163, 40.82445048426654],
        'label': 'Colgate Close'},
       {'borough': 'The Bronx',
        'centroid': [-73.88487360015219, 40.84378221563152],
        'label': 'Crotona Parkway Malls'},
       {'borough': 'Manhattan',
        'centroid': [-73.98204580723277, 40.735540992675325],
        'label': 'Augustus St. Gaudens Playground'},
       {'borough': 'Staten Island',
        'centroid': [-74.08388002802383, 40.638690407960844],
        'label': 'Liotti Ikefugi Playground'},
       {'borough': 'Staten Island',
        'centroid': [-74.17981503869584, 40.54942149498353],
        'label': 'Drumgoole Tot Lot'},
       {'borough': 'The Bronx',
        'centroid': [-73.89710692394408, 40.8270112150038],
        'label': 'Rev J Polite Playground'},
       {'borough': 'Brooklyn',
        'centroid': [-73.94747468348251, 40.65582376900452],
        'label': 'Rolph Henry Playground'},
       {'borough': 'The Bronx',
        'centroid': [-73.90656301429469, 40.83102069620703],
        'label': 'Rev Lena Irons Unity Park'},
       {'borough': 'Brooklyn',
        'centroid': [-73.95280478686206, 40.6764651213079],
        'label': 'Grant Gore'},
       {'borough': 'Manhattan',
        'centroid': [-73.97892467218068, 40.72512352154552],
        'label': 'Earth People'},
       {'borough': 'Manhattan',
        'centroid': [-73.9790185968591, 40.71165263736731],
        'label': 'Corlears Hook Park'},
       {'borough': 'Brooklyn',
        'centroid': [-73.88449060210714, 40.67376120063192],
        'label': 'Floral Vineyard'},
       {'borough': 'Queens',
        'centroid': [-73.79124168257538, 40.595595279406794],
        'label': 'Thursby Basin Park'},
       {'borough': 'Manhattan',
        'centroid': [-73.96899866567158, 40.752307523807296],
        'label': 'Dag Hammarskjold Plaza'},
       {'borough': 'The Bronx',
        'centroid': [-73.91012596560603, 40.81132521674216],
        'label': 'I-Am-Park'},
       {'borough': 'Brooklyn',
        'centroid': [-73.97431889808087, 40.59673124625327],
        'label': 'Lady Moody Triangle'},
       {'borough': 'Brooklyn',
        'centroid': [-73.98809237338551, 40.70128661745842],
        'label': 'Bar and Grill Park'},
       {'borough': 'Brooklyn',
        'centroid': [-73.93611029535819, 40.592396053606564],
        'label': 'Yak Playground'},
       {'borough': 'Queens',
        'centroid': [-73.80223302208569, 40.75516723006247],
        'label': 'The Olde Towne of Flushing Burial Ground'},
        {'borough': 'Queens',
        'centroid': [-73.919168, 40.7308991],
        'label': 'Triangle 54'}]
    }

    this.remainingChoices = {real: this.allChoices.real.slice(), fake: this.allChoices.fake.slice()};
  }

  choice(label) {
    console.log(label);
    console.log(this.correctAnswer);
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

      window.setTimeout(() => {
        this.setState({
          correct: this.state.correct + 1,
          zoom: 12,
          state: 'choice'})
      }, 3000);

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

      window.setTimeout(() => {
        this.setState({
          zoom: 12,
          state: 'choice'})
      }, 4000);
    }
  }

  render() {
    // display special options for wrong/right
    if (this.state.state == 'wrong') {
      var controls = <div id="controls" className="wrong">
        <div id="instructions">
          {"Oops.  " + this.state.pick + " is actually fake. "}
          <span className="park">{this.correctAnswer.label}</span>
          {" was a real park in " + this.correctAnswer.borough + "."}
        </div>
      </div>;

    } else if (this.state.state == 'right') {
      var controls = <div id="controls" className="right">
        <div id="instructions">
          {"Yes! "}
          <span className="park">{this.correctAnswer.label}</span>
          {" is a park in " + this.correctAnswer.borough + "."}
        </div>
      </div>;

    } else {

      // if it's the end, we display a special message
      if (this.state.round == 10) {
        if (this.state.correct >= 7) {
          var evaluation = 'Congratulations!';
        } else if (this.state.correct >= 5) {
          var evaluation = 'Better luck next time.';
        } else {
          var evaluation = 'Maybe you should go outside.';
        }

        var controls = <div id="controls">
          <div id="score-intro">You got...</div>
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

          if (i == correctPos) {
            choice = Math.floor(Math.random() * this.remainingChoices.real.length);
            label = this.remainingChoices.real[choice].label;
            this.correctAnswer = this.remainingChoices.real[choice];
            this.remainingChoices.real.splice(choice, 1);
          } else {
            choice = Math.floor(Math.random() * this.remainingChoices.fake.length);
            label = this.remainingChoices.fake[choice];
            this.remainingChoices.fake.splice(choice, 1);
          }

          choices.push(<Choice callback={this.choice.bind(this)} label={label} key={label} />);
        }

        if (this.state.round == 0 && this.state.round < 10) {
          var intro = <div className="intro">New York City has a lot of parks. How well do you know them? Using a silly recurrent neural network, I've generated a bunch of fake park names. There are ten rounds, good luck!</div>;
        } else {
          var intro = [];
        }

        var controls = <div id="controls">
          <div id="instructions">
            <div className="round">{(this.state.round+1) + "/10"}</div>
            {intro}
            <div className="question">Which one is a real NYC park?</div>
          </div>

          <div id="choices">
            {choices}
          </div>
        </div>;
      }
    }
    

    var parkMarker = [];
    console.log(this.state.round);
    console.log(this.state.state);
    console.log((this.state.state != 'choice' || this.state.round < 10));
    if (this.state.round > 0 && (this.state.state != 'choice' || this.state.round < 10)) {
      var parkMarker = <Marker position={[this.state.lat, this.state.lon]} />;
    }

    return (
      <div id="main">
        {controls}
        <div id="background-map">
          <Map center={[this.state.lat, this.state.lon]} zoom={this.state.zoom} >
            <TileLayer
              url="https://api.mapbox.com/styles/v1/loganw/cjduri34y5gir2rq9ah0zan6h/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibG9nYW53IiwiYSI6ImNqNTFscTg3ZTA1M3Myd3A5ZnoxMXQ1eHkifQ.rD4GwekG5CArTiMkIuv-gA"
            />
            {parkMarker}
          </Map>
        </div>
      </div>
    );
  }
}

export default App;
