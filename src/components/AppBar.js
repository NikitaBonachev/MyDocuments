import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const AppBarDocuments = () => (
  <AppBar
    title="Мои документы"
    showMenuIconButton={false}
    iconElementRight={<FlatButton label="Выйти" />}
  />
);

export default AppBarDocuments;
