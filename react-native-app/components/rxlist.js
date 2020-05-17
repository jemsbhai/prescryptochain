import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: '1',
    title: 'Prescription 1',
  },
  {
    id: '2',
    title: 'Prescription 2',
  },
  {
    id: '3',
    title: 'Prescription 3',
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function RxList() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onPress={() => this.props.navigation.navigate('ViewRx')}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
      <Text onPress={this.props.navigation.navigate('ViewRx')}>...</Text>
      <Image source={require('../assets/health.png')} style={styles.img}/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2541B2',
    padding: 20,
    alignContent:'center',
    justifyContent:'center',
    paddingTop:100,
  },
  item: {
    backgroundColor: '#EEF5EF',
    padding: 20,
    margin:20,
    borderRadius:5,
  },
  title: {
    fontSize: 28,
    fontFamily:'Open Sans',
    color:'#EBF5FF',
    textAlign:'center',
    marginTop:30,
  },
  img: {
    flex: 2,
    resizeMode: 'contain',
    alignSelf:'center',
    marginBottom:20
  },
});