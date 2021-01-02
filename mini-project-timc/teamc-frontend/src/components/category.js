import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default class Category extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      List: [
        {genre: 'Action'},
        {genre: 'Comedy'},
        {genre: 'Drama'},
        {genre: 'Animation'},
        {genre: 'Biography'},
      ]
    }
  }

  render(){
    return(
      <View>
        <Text style = {{fontWeight: 'bold'}}>Browse by Category</Text>
        <FlatList 
          horizontal
          data = {this.state.List}
          renderItem = {({item}) => 
            <View style = {{padding: 10}}>
              <View style = {{backgroundColor: 'pink', margin: 'auto'}}/>
              <Text>{item.genre}</Text>
            </View>}
          />
      </View>
    )
  }
}