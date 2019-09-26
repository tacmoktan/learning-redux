import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//component
import Blogs from './components/Blogs';
import Post from './components/Post'; //single post

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Blogs} />
          <Route path="/post/:id" component={Post}/> 
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
