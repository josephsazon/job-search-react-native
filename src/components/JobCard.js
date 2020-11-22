import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class JobCard extends React.Component {
  render() {
    const {
      jobTitle,
      jobPosition,
      ratePerHour,
      selected,
      imagePath,
    } = this.props;
    const labelBackground = selected ? '#000' : '#fff';
    const jobTitleColor = selected ? '#fff' : '#000';

    return (
      <View
        style={{
          backgroundColor: '#fff',
          height: 200,
          width: 150,
          borderRadius: 20,
          marginTop: 35,
          marginHorizontal: 13,
        }}
      >
        <Image source={imagePath} style={{ width: 150, height: 150 }} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail')}
        >
          <View
            style={{
              backgroundColor: labelBackground,
              height: 50,
              borderRadius: 20,
              // marginTop: -10,
              padding: 8,
            }}
          >
            <Text
              style={{
                color: jobTitleColor,
                fontFamily: 'SemiBold',
                fontSize: 13,
                textAlign: 'center',
              }}
            >
              {jobTitle}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 4,
              }}
            >
              <Text
                style={{ color: '#b0b0b0', fontFamily: 'Bold', fontSize: 13 }}
              >
                {jobPosition}
              </Text>
              <Text
                style={{ color: '#b0b0b0', fontFamily: 'Bold', fontSize: 13 }}
              >
                ${ratePerHour}/h
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
