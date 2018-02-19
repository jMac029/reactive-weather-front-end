import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1> Reactive Weather </h1>{' '}
          <p>
            This is a simple app for looking up the weather for any location in
            the world.Simply input the location you wish to look up below.{' '}
          </p>{' '}
          <Form inline>
            <FormGroup bsSize="large" controlId="formInlineName">
              <FormControl type="text" placeholder="Honolulu, HI or 96815" />
            </FormGroup>{' '}
            <Button
              bsStyle="success btn-lg"
              type="submit"
              onClick={searchWeather}
            >
              {' '}
              Get the weather!{' '}
            </Button>{' '}
          </Form>{' '}
        </Jumbotron>{' '}
      </div>
    );
  }
}

export default App;
