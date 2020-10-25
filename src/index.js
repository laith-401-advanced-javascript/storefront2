import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import App from './App.js';


console.log('hiiiiiiiiiiiiiii');
class Main extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <App />
        </Provider>
      </>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
