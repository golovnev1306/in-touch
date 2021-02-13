import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import Content from './components/Content'
import Header from './components/Header/Header'


function App() {
  return (
  <Provider store={store}>
	<BrowserRouter>	
		<div className="App">
			<Header />
			<Content />
		</div>
	</BrowserRouter>
	</Provider>
  );
}

export default App;
