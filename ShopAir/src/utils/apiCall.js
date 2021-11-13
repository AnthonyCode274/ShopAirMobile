import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class apiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.apiCall();
  }
  async apiCall() {
    let response = await fetch('http://10.0.2.2:9000/products/products-list');
    let resJson = await response.json();
    console.log(resJson);
  }

  render() {
    return (
      <View>
        <Text> apiCall </Text>
      </View>
    );
  }
}
