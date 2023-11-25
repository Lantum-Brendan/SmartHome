import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView  } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
    <SafeAreaView className="flex-1" >
      <View className="alignItem-center mt-0 h-screen">

          <View className="flex-row pt-5 mt-0 rounded-br-4xl bg-slate-200 rounded-bl-2xl">
            <Image source={require('../assets/images/welcome.png')} className="rounded-br-4xl rounded-bl-2xl" 
           style={{width:400, height: 250}} />
          </View>
          <View className="space-y-4 bg-orange-400 h-screen mt-4 rounded-tr-3xl rounded-tl-3xl">
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              className="py-3 by-yellow-400 mx-7 rounded-xl">
                <Text
                  className="text-xl font-bold text-center text-green-800 mt-5">
                    Sign Up
                  </Text>
              </TouchableOpacity>
              <View className="flex-row justify-center ">
                <Text className="text-white font-semibold">Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} size="">
                  <Text className="font-bold text-green-900 "> Login </Text>
                </TouchableOpacity>
              </View>

          </View>
      </View>    
    </SafeAreaView>
  )
}