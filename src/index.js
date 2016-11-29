import React from 'react';
import ReactDOM from 'react-dom';
import MyDocuments from './components/MyDocuments';
import './styles/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from './components/AppBar';
injectTapEventPlugin();

const Root = () => (
  <div>
    <MuiThemeProvider>
      <AppBar />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <MyDocuments />
    </MuiThemeProvider>
  </div>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
