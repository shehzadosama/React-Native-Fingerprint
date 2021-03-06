import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
 
import ShakingText from './ShakingText.component';
import styles from './FingerprintPopup.component.styles';
 
class FingerprintPopup extends Component {
 
  constructor(props) {
    super(props);
    this.state = { errorMessage: undefined };
  }
 
  componentDidMount() {
    console.log("did mount")
    FingerprintScanner
      .authenticate({ onAttempt: this.handleAuthenticationAttempted })
      .then((res) => {
        console.log("authenticate: res : ",res)
        // this.props.handlePopupDismissed();
        Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
      })
      .catch((error) => {
        console.log("authenticate: err :",error)
        this.setState({ errorMessage: error.message });
        this.description.shake();
      });
  }
 
  componentWillUnmount() {
    console.log("un mount")
    
    FingerprintScanner.release();
  }
 
  handleAuthenticationAttempted = (error) => {
    this.setState({ errorMessage: error.message });
    this.description.shake();
  };
 
  render() {
    const { errorMessage } = this.state;
    const { style, handlePopupDismissed } = this.props;
 
    return (
      <View style={styles.container}>
        <View style={[styles.contentContainer, style]}>
 
          <Image
            style={styles.logo}
            source={require('./assets/finger_print.png')}
          />
 
          <Text style={styles.heading}>
            Fingerprint{'\n'}Authentication
          </Text>
          <ShakingText
            ref={(instance) => { this.description = instance; }}
            style={styles.description(!!errorMessage)}>
            {errorMessage || 'Scan your fingerprint on the\ndevice scanner to continue'}
          </ShakingText>
 
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePopupDismissed}
          >
            <Text style={styles.buttonText}>
              BACK TO MAIN
            </Text>
          </TouchableOpacity>
 
        </View>
      </View>
    );
  }
}
 
FingerprintPopup.propTypes = {
  style: ViewPropTypes.style,
  handlePopupDismissed: PropTypes.func.isRequired,
};
 
export default FingerprintPopup;