import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';

type Props = {navigation: NavigationProp<any>};

const Home = ({navigation}: Props) => {
  return (
    <View>
      <Text>Home</Text>

      <Button title="Go to sample" onPress={() => navigation.navigate('Sample')}>
        <Text>Go to sample</Text>
      </Button>
    </View>
  );
};

export default Home;
