import React from 'react';
import { View, Text, Image } from 'react-native';

export default class JobListItem extends React.Component {
  render() {
    const { jobTitle, jobPosition, ratePerHour, imagePath } = this.props;

    return (
      <View
        style={{
          backgroundColor: '#fff',
          marginTop: 10,
          flexDirection: 'row',
          borderRadius: 10,
          alignItems: 'center',
          padding: 10,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: '#dfdfdf',
              borderRadius: 5,
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image source={imagePath} style={{ width: 40, height: 40 }} />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontFamily: 'ExtraBold',
                fontSize: 13,
              }}
            >
              {jobTitle}
            </Text>
            <View
              style={{
                backgroundColor: '#dfdfdf',
                borderRadius: 5,
                width: 70,
                alignItems: 'center',
              }}
            >
              <Text
                style={{ fontFamily: 'Medium', color: '#000', opacity: 0.5 }}
              >
                {jobPosition}
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'ExtraBold',
            fontSize: 18,
          }}
        >
          ${ratePerHour}/h
        </Text>
      </View>
    );
  }
}
