import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import JobCard from '../components/JobCard';
import JobListItem from '../components/JobListItem';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#e5e5e5', paddingHorizontal: 20 }}>
        <Text
          style={{ color: '#b0b0b0', marginTop: 40, fontFamily: 'SemiBold' }}
        >
          Hello Joseph
        </Text>
        <Text
          style={{
            fontFamily: 'Bold',
            fontSize: 18,
            marginTop: 13,
          }}
        >
          Find your best jobs
        </Text>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 5,
            paddingVertical: 5,
            paddingLeft: 15,
            paddingRight: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor="#b0b0b0"
            style={{ fontFamily: 'Medium' }}
          />
          <View
            style={{
              backgroundColor: '#000000',
              width: 30,
              height: 30,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image source={require('../images/searchWhite.png')} />
          </View>
        </View>
        <Text style={{ fontFamily: 'ExtraBold', marginTop: 20, fontSize: 15 }}>
          Most Popular
        </Text>

        <ScrollView horizontal>
          <JobCard
            jobTitle="Software Developer"
            jobPosition="Full Time"
            ratePerHour={50}
            imagePath={require('../images/dev.png')}
            selected={true}
            navigation={this.props.navigation}
          />
          <JobCard
            jobTitle="Accountant"
            jobPosition="Full Time"
            ratePerHour={50}
            imagePath={require('../images/accountant.png')}
          />
          <JobCard
            jobTitle="Car Driver"
            jobPosition="Full Time"
            ratePerHour={50}
            imagePath={require('../images/driver.png')}
          />
        </ScrollView>
        <Text
          style={{
            fontFamily: 'ExtraBold',
            marginTop: 20,
            fontSize: 15,
          }}
        >
          Nearby jobs
        </Text>
        <JobListItem
          jobTitle="Graphic Designer"
          jobPosition="Part Time"
          ratePerHour={5}
          imagePath={require('../images/pentool.png')}
        />
        <JobListItem
          jobTitle="Nurse"
          jobPosition="Part Time"
          ratePerHour={5}
          imagePath={require('../images/sitter.png')}
        />
        <JobListItem
          jobTitle="Head Chef"
          jobPosition="Part Time"
          ratePerHour={5}
          imagePath={require('../images/dine.png')}
        />
        <JobListItem
          jobTitle="Babysitter"
          jobPosition="Part Time"
          ratePerHour={5}
          imagePath={require('../images/sitter.png')}
        />
        <JobListItem
          jobTitle="Graphic Designer"
          jobPosition="Part Time"
          ratePerHour={5}
          imagePath={require('../images/pentool.png')}
        />
        <JobListItem
          jobTitle="Nurse"
          jobPosition="Part Time"
          ratePerHour={5}
          imagePath={require('../images/sitter.png')}
        />
        <JobListItem
          jobTitle="Head Chef"
          jobPosition="Part Time"
          ratePerHour={5}
          imagePath={require('../images/dine.png')}
        />
        <JobListItem
          jobTitle="Babysitter"
          jobPosition="Part Time"
          ratePerHour={5}
          imagePath={require('../images/sitter.png')}
        />
      </ScrollView>
    );
  }
}
