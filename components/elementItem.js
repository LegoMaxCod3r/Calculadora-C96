import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import elementDB from './db';
import elementData from './elements';

export default class elementItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pressedButtonIndex: '',
        };
      }

      render() {
        return (
          <TouchableOpacity
            style={
              this.props.buttonIndex === this.state.pressButtonIndex
                ? [styles.chunkButton, { backgroundColor: 'white' }]
                : [styles.chunkButton, { backgroundColor: '#01570b' }]
            }
            onPress={() => {
              this.setState({ pressButtonIndex: this.props.buttonIndex });
            }}>
            <Text
              style={
                this.props.buttonIndex === this.state.pressButtonIndex
                  ? [styles.displayText, { color: '#450057' }]
                  : [styles.displayText, { color: 'white' }]
              }>
              {this.props.wordChunk}
            </Text>
          </TouchableOpacity>
        );
      }
    }
    
    const styles = StyleSheet.create({
      displayText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
      },
      chunkButton: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#01570b',
      },
    });
    