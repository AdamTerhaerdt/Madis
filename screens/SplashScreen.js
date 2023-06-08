import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import Button from '../components/Button';

const images = [
    require('../assets/main.png'),
    require('../assets/2.png'),
    require('../assets/3.png'),
];

const quotes = [
    "Coffee from nature to humans",
    "The Choice of Coffee",
    "Knowledge and experience in coffee",
];

const SplashScreen = ({navigation}) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
        <View className="flex-1">
            <Carousel
                loop
                width={width}
                height={height}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                    <View className="flex-1">
                        <Image 
                            source={images[index]}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        <Text className="absolute text-white font-bold justify-center items-center text-lg" style={{top: height/2+10, left: width/4 - 20}}>{quotes[index]}</Text>
                    </View>
                )}
            />
            <SafeAreaView>
                <View className='flex-1 justify-center items-center'>
                    <Image 
                        source={require('../assets/logo.png')}
                        style={{
                            width: 160,
                            height: 200,
                            position: 'absolute',
                            bottom: height / 2,
                        }}
                    />
                    <View className='items-center absolute' style={{bottom: height / 5}}>
                        <Button 
                            name="Sign In"
                            navigation={navigation}
                            navigationScreen="HomeScreen"
                        />
                    </View>
                    <TouchableOpacity className="flex-row">
                        <Text className="absolute text-[#CACACA] justify-center items-center text-lg" style={{bottom: height / 15}}>Don't have an account?</Text>
                        <Text className="absolute text-[#CACACA] justify-center items-center text-lg" style={{bottom: height / 15}}>Sign Up!</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default SplashScreen