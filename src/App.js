import React from 'react'
import logo from './logo.svg';
import './App.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from V2 Now added Backend
        </p>
        <Heading level={1}> We now have Auth?</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
