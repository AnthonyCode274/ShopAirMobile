/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'gold',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Button
          title="+"
          style={{minWidth: 50, justifyContent: 'center'}}
          onPress={this.props.increase}
        />
        <Text
          style={{
            marginHorizontal: 15,
            fontSize: 20,
          }}>
          {this.props.counter}
        </Text>
        <Button
          style={{minWidth: 50, justifyContent: 'center'}}
          title="-"
          onPress={this.props.decrease}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {counter: state.counter};
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({type: 'INCREASE'}),
    decrease: () => dispatch({type: 'DECREASE'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
