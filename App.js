/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import FunctionView from "./src/FunctionView"
import Util from "./src/utils";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      numOfText: 140
    };
  }

  _updateTextNum(text) {
    let remain = 140 - text.length;
    this.setState({
      numOfText: remain
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={require("./src/img/icon.png")} style={styles.icon} />
          <Icon name="md-close" color="grey" size={25} />
        </View>
        <TextInput 
          style={styles.textArea}
          maxLength={140}
          multiline
          placeholder="What's new?"
          selectionColor="black"
          placeholderTextColor="grey"
          onChangeText={text => this._updateTextNum(text)}
        />
        <FunctionView numOfText={this.state.numOfText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    height: Util.size.height,
    backgroundColor: "#ffffff"
  },
  iconContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 5
  },
  textArea: {
    height: 335,
    padding: 15,
    fontSize: 20
  }
});
