import { View, Text, SafeAreaView, ImageBackground, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import FeaturedRow from '../components/FeaturedRow'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  return (
  <ImageBackground source={require('../assets/main3.png')} style={{width: '100%', height: '100%'}}>
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between px-5">
            <View>
              <Text className="text-4xl font-bold germania-one mt-2 text-[#D9AD1E]">Hi, Adam</Text>
              <Text className="text-sm text-[#CACACA]">"Where coffee dreams come true"</Text>
            </View>
            <View className="mt-1 mr-5">
              <Ionicons name="notifications-outline" size={32} color="#D9AD1E"/>
            </View>
          </View>
          
          {/* Body */}
          {/* Featured */}
          <FeaturedRow
            id="123"
            title="Featured"
            description="Discover the Perfect Brew"
          />

          {/* Buy Again */}
          <FeaturedRow
            id="567"
            title="Buy Again"
            description="Tried, Loved, and Highly Recommended"
          />

          {/* Popular */}
          <FeaturedRow
            id="890"
            title="Featured"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  </ImageBackground>
  )
}

export default HomeScreen