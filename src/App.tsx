import React from 'react';
import * as ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

class Blob extends React.Component<any> {
  constructor (props: any) {
    super(props);
  }

  createChildBlob() {
    const blob = <Blob 
                    parent = {this.props.id}
                    id = {this.props.id + "1"}/>;
    if (document.getElementById("row" + (this.props.row+1)) == null){
      const newRow = <div id={"row" + (this.props.row+1)}></div>
      const current = document.getElementById("container");
      console.log(current);
      ReactDOM.render(newRow, document.getElementById("container"))
    }
    alert(this.props.id);
    ReactDOM.render(blob, document.getElementById(this.props.id));
  }

  render () {
    return (
          <div id={this.props.id}
               className="circleBase type1"
               onClick={() => this.createChildBlob()}>
               </div>
    );
  }
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div id="container">
          <div id="row0">
            <Blob 
              parent = {null}
              id = {"The Parent"}
              row = {0}/>
          </div>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
