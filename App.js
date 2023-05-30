import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import React, { useState } from 'react'

const industryList = [
  { key: 'Marketing', value: '1' },
  { key: 'Steel Industry', value: '2' },
  { key: 'Petroleum', value: '3' },
  { key: 'Therapy', value: '4' },
  { key: 'Engineering', value: '5' },
  { key: 'Mechanical 1', value: '6' },
  { key: 'Mechanical 2', value: '7' },
  { key: 'Mechanical 3', value: '8' },
  { key: 'Mechanical 4', value: '9' },
  { key: 'Mechanical 5', value: '10' },
  { key: 'Mechanical 6', value: '11' },
  { key: 'Mechanical 7', value: '12' },
  { key: 'Mechanical 8', value: '13' },

]

const DropDownL = () => {

  const [selectIndustry, setSelectedIndustry] = useState('Industry')
  const [isClicked, setIsClicked] = useState(false)

  return (

    <View style={styles.container}>

      <TouchableOpacity style={styles.touchableContainer} onPress={() => setIsClicked(!isClicked)}>

        <Text style={styles.textIndustry}>{selectIndustry}</Text>

        <Image source={require('../assets/images/arrowDown.png')} />

      </TouchableOpacity>

      {isClicked ? <View style={styles.dropDownArea}>
        <FlatList data={industryList} renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.touchableIndustryItem}  onPress={()=>{
              setSelectedIndustry(item.key)
              setIsClicked(false)
            }} >
              <Text style={styles.industryItem} >{item.key}</Text>
            </TouchableOpacity>
          )
        }} />
      </View> : null}



    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    justifyContent: 'center',
    marginBottom: 24,
    alignItems: 'center',

  },

  touchableContainer: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: 56,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textIndustry: {
    fontFamily: 'Urbanist-Regular',
    letterSpacing: 0.2,
    fontSize: 14,
    color: '#9E9E9E',
  },

  dropDownArea: {
    height: 200,
    width: '90%',
    backgroundColor: '#FAFAFA',
    elevation: 1.5,
    borderRadius: 12,
    marginTop: 1,
  },

  industryItem: {
    fontSize:14,
    color:'#9E9E9E'
  },

  touchableIndustryItem: {
    height:40,
    borderBottomWidth:0.2,
    width:'80%',
    alignSelf: 'center',
    justifyContent:'center',
    borderBottomColor:'#9E9E9E',
  },
})



export default DropDownL
