import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image style={styles.image} source={require('./assets/slika.jpg')} />
        </View>
        <View style={styles.right}>
          <Text style={styles.title}> Marija Milošević</Text>
          <Text style={styles.personalInfo}>11. 04. 2000.</Text>
          <Text style={styles.personalInfo}>Florijanova 14, Valpovo</Text>
          <Text style={styles.personalInfo}>+385 95 795 8167 </Text>
          <Text style={styles.personalInfo}>mmilosevic@ffos.hr</Text>
        </View>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>OBRAZOVANJE</Text>
        <Text style={styles.text1}>
          Studentica diplomskog studija informatologije i informacijskih
          tehnologija
        </Text>
        <Text style={styles.text2}>Filozofski fakultet Osijek</Text>
        <Text style={styles.text3}>10/2021 - DANAS</Text>

        <Text style={styles.text1}>
          Sveučilišna prvostupnica informatologije
        </Text>
        <Text style={styles.text2}>Filozofski fakultet Osijek</Text>
        <Text style={styles.text3}>07/2018 - 09/2021 </Text>

        <Text style={styles.text1}>Opća gimnazija </Text>
        <Text style={styles.text2}>Filozofski fakultet Osijek</Text>
        <Text style={styles.text3}>7/2014 - 7/2018 </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.title}>STRUČNA PRAKSA</Text>
        <Text style={styles.text1}>
          Praktičan rad u Samostanskoj knjižnici Družbe Kćeri Milosrđa u Blatu
          na Korčuli
        </Text>
        <Text style={styles.text2}>
          Samostanska knjižnica, Blato na Korčuli
        </Text>
        <Text style={styles.text3}>08/2021 - 09/2021 </Text>

        <Text style={styles.text1}>Praktičan rad u tvrtki Mono u Osijeku</Text>
        <Text style={styles.text2}>Mono Software, Osijek </Text>
        <Text style={styles.text3}>9/2020 - 10/2020</Text>

        <Text style={styles.text1}>
          Praktičan rad u Muzeju Valpovštine u Valpovu
        </Text>
        <Text style={styles.text2}>Muzej Valpovštine, Valpovo </Text>
        <Text style={styles.text3}>09/2019 </Text>

        <Text style={styles.text1}>
          Praktičan rad u Knjižnici Filozofskog fakulteta Osijek
        </Text>
        <Text style={styles.text2}>Filozofski fakultet Osijek</Text>
        <Text style={styles.text3}>6/2019 - 7/2019</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>RADNO ISKUSTVO</Text>
        <Text style={styles.text1}>
          Službeni fotograf Filozofskog fakulteta Osijek
        </Text>
        <Text style={styles.text2}>Filozofski fakultet Osijek</Text>
        <Text style={styles.text3}>2021 - DANAS</Text>

        <Text style={styles.text1}>Student istraživač</Text>
        <Text style={styles.text2}>
          Filozofski fakultet Osijek, Centar za interdisciplinarna istraživanja
        </Text>
        <Text style={styles.text3}>2022</Text>

        <Text style={styles.text1}>Student mentor</Text>
        <Text style={styles.text2}>
          Centar za mir i nenasilje Osijek, IN-EDU hackathon medijske i
          informacijske pismenosti
        </Text>
        <Text style={styles.text3}>2020</Text>
      </View>

      <View style={styles.end}>
        <View style={styles.char}>
          <Text style={styles.title}>KARAKTERISTIKE</Text>
          <Text style={styles.text3}>otvorenost i motiviranost</Text>
          <Text style={styles.text3}>organizirana i pouzdana osoba</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.title}>JEZICI</Text>
          <Text style={styles.text3}>hrvatski</Text>
          <Text style={styles.text3}>engleski</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#E4DCF2',
    padding: 10,
    fontFamily: ' Arial',
  },
  title: {
    color: '#3400A3',
    fontSize: 20,
    fontWeight: '600',
  },
  header: {
    margin: 10,
    flexDirection: 'row',
  },
  paragraph: {
    marginLeft: 20,
  },
  personalInfo: {
    marginLeft: 15,
  },
  image: {
    width: 100,
    height: 150,
    margin: 5,
    padding: 10,
  },
  text1: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
  text2: {
    fontSize: 10,
    marginLeft: 10,
  },
  text3: {
    fontSize: 12,
    marginLeft: 10,
  },
  end: {
    margin: 20,
    flex: 1,
    flexDirection: 'row',
    paddingRight: 10,
  },
  lang: {
    marginLeft: 55,
  },
});
