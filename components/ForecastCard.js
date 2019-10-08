import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

export default class ForecastCard extends Component {

  render() {
    return (
      <Card containerStyle={styles.card}>


      </Card>
    );
  }
}

const styles = StyleSheet.create({
  time: {
    fontSize: 38
  },
  notes: {
    fontSize: 18,
    textTransform: 'capitalize'
  }
});

export default ForecastCard;