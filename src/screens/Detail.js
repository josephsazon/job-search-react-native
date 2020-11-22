import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default class Detail extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#f8f8f8',
          height: '100%',
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: '#000',
            height: 30,
            width: 50,
            marginTop: 50,
            borderRadius: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image source={require('../images/back.png')} />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../images/dev2.png')}
          style={{
            marginLeft: 50,
            marginTop: -50,
            width: '100%',
            height: 300,
          }}
        />
        <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontFamily: 'ExtraBold' }}>
                Software Developera
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontFamily: 'ExtraBold',
                    color: '#000',
                    opacity: 0.6,
                    fontSize: 14,
                  }}
                >
                  Parallel
                </Text>
                <Text
                  style={{
                    fontFamily: 'Bold',
                    fontSize: 13,
                    color: '#b8b8b8',
                    marginLeft: 25,
                  }}
                >
                  Addis, Ethiopia
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#dfdfdf',
                height: 32,
                width: 32,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={require('../images/favourite.png')}
                style={{ opacity: 0.5, width: 24, height: 24 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../images/1.jpg')}
              style={{ width: 30, height: 30 }}
            />
            <Image
              source={require('../images/2.jpg')}
              style={{ width: 30, height: 30 }}
            />
            <Image
              source={require('../images/3.jpg')}
              style={{ width: 30, height: 30 }}
            />
            <Image
              source={require('../images/4.jpg')}
              style={{ width: 30, height: 30 }}
            />
            <Text
              style={{
                fontFamily: 'Bold',
                color: '#b8b8b8',
                paddingHorizontal: 10,
              }}
            >
              4 friends work here
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            // justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 8,
              flex: 3,
              marginRight: 5,
            }}
          >
            <Text
              style={{
                fontFamily: 'ExtraBold',
                color: '#b8b8b8',
              }}
            >
              Experience
            </Text>
            <Text
              style={{
                fontFamily: 'ExtraBold',
              }}
            >
              Minimum 2 years
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 8,
              flex: 3,
              marginLeft: 5,
            }}
          >
            <Text
              style={{
                fontFamily: 'ExtraBold',
                color: '#b8b8b8',
              }}
            >
              Type
            </Text>
            <Text
              style={{
                fontFamily: 'ExtraBold',
              }}
            >
              Full Time
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'ExtraBold',
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Job Description
          </Text>
          <Text
            style={{
              fontFamily: 'SemiBold',
              color: '#b2b2b2',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sem
            id ipsum commodo efficitur ac in enim. Donec ut nisi commodo,
            dignissim est ut, placerat sapien. Curabitur neque erat, varius nec
            odio ut, molestie sollicitudin odio. Sed tincidunt felis eu ante
            blandit pretium.
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
          }}
        >
          <View
            style={{
              backgroundColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 50,
              marginTop: 30,
              borderRadius: 15,
            }}
          >
            <Image
              source={require('../images/for.png')}
              style={{ width: 30 }}
            />
            <Text style={{ color: '#fff', fontFamily: 'Regular' }}>Apply</Text>
          </View>
        </View>
      </View>
    );
  }
}
