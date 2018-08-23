import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A simple File Picker example</h1>
        </header>
        <div className="App-intro">
          <FilePicker />
        </div>
      </div>
    );
  }
}

class FilePicker extends Component {
  handleChange = (e) => {
    let input = e.target;
    if (input.files && input.files[0]) {
      let fileName = input.files[0].name;
      this.setState({pickedFileName: fileName});
      var reader = new FileReader();
      reader.onload = function (e) {
        let element = document.getElementById('image-display');
        element.src = e.target.result;
        element.classList.remove("hidden");
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Choose a file</legend>
          <div>
            <input type="file"
              accept="image/png, image/jpeg"
              onChange={this.handleChange} />
          </div>
        </fieldset>
        <div>
          <img id="image-display" className="hidden image-display" alt="display error"></img>
        </div>
      </div>
    );
  }
}

export default App;
