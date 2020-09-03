/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LottieView from 'lottie-react-native';

import codePush from 'react-native-code-push';

import coffinDanceSong from './coffinSong.mp3';

const lightsArr = [
  'red',
  'green',
  'blue',
  'white',
  'purple',
  'yellow',
  '#FAFAFA',
];

import {
  Player,
  Recorder,
  MediaStates,
} from '@react-native-community/audio-toolkit';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const App: () => React$Node = () => {
  const [teste, setTest] = useState(false);
  const [light, setLight] = useState('red');
  const [abc, setAbc] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLight(lightsArr[getRandomInt(0, 5)]);
      setAbc(abc + 1);
    }, 1500);
  }, [light, abc]);

  let player = new Player(
    'https://public.boxcloud.com/api/2.0/files/714552203891/content?preview=true&version=759477873491&access_token=1!bu9XR9w0d6L3W35df5EOt1OgIk2jIWDvky-3KTSnULxYMx7uhDXbi6mvV9h0iP6p6HnDp09QZq0ASbPh_VtPszP_zhMh6sjWRmoF3ITalQ-9HUecw4vqPU-bQBmR-TZ1Szt2mcWvPW5sqJeysWRkTtHn3wPKvGn-H5LQF9AYqmQpEspXV1TfRI06DEwPeQBUEwy9TSbfWAH-_U3bXuIs0Jn4BuClDtjCmb-R0vIYG3wtEPXFIjV2RHisrGBDVrpKeFzqjTAcYg3C6Ilgz0kDXeWsi3Nzmzbn2mF5MLKMwZ1gT_wEVD6rS8c3PW0NjPkPMWSsNY_txMKmOhBa0GCd4LHFsm-yy-4u9cmhchH_GwBt8jFCo2MQbE5HR6WTDsPj3xAMwMWoQ-IVfdvko4s8LLxIIfSyGG8nKq2GHphTDAZIE602vIm1a3cleYBE0Jk8vYpI7c6wx3bTeB_9TjMs5p6wBXKP4ErOl1rl2fz2rYxjGY1bFq-PneQtwAKftvd0YrkzyvmHO5iMw8MDNYhBA1zpjCtrrmo1O2I84nppAVuUDcrUoxrnaBLkAyX0ijaQR2mfs9n3TaQ-5rmW4dXZAg881KJGoQW10MHjqYV-2XoWjrUOcONerzY2RoDLULfafHRP-4CrgquLhgIe6p8BqWtMro-cgzfkcTIt-EryzZWUAg9v&box_client_name=box-content-preview&box_client_version=2.49.1',
  );

  const onPressButton = () => {
    if (!teste) {
      player.play();
      setTest(true);
    } else {
      player.stop();
      setTest(false);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor: light}}>
          <View>
            <Text>CODEPUSH FUnciona mesmo???</Text>
            {teste && (
              <Image
                source={{
                  uri:
                    'https://www.acritica.com/uploads/news/image/740539/show_tiririca.JPG',
                }}
                style={{width: 200, height: 200, resizeMode: 'contain'}}
              />
            )}
            <Pressable
              style={{
                backgroundColor: 'red',
                borderRadius: 20,
                width: '100%',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => onPressButton()}>
              <Text style={{color: 'white'}}>OIII AMIGAAO</Text>
            </Pressable>
            {teste && (
              <View
                style={{
                  backgroundColor: '#FAFAFA',
                  width: 200,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>ESSE CARA SE SABE NE</Text>
              </View>
            )}
            {teste && (
              <View style={{width: '100%', height: 200}}>
                <LottieView
                  source={require('./coffindance.json')}
                  autoPlay
                  loop
                />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default codePush(App);
