import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
const blogDialog = (props) => {

    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={props.onRequestClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={props.onRequestClose}
        />,
      ];
      const muiTheme = getMuiTheme({
     
      }, {
        avatar: {
          borderColor: null,
        },
        userAgent:'all'
      });
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
       <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={true}
          onRequestClose={props.onRequestClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        </MuiThemeProvider>
  );
};



export default blogDialog;

