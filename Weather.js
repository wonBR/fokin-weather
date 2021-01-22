import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "천둥번개! <(˃д˂̵)>",
    subtitle: "⛈⚡⛈"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#76b852", "#E9FDE4"],
    title: "이슬비! ｡:ﾟ૮˶ˆﻌˆ˶ა ﾟ:｡",
    subtitle: "💦🌱💦"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#457fca", "#5691c8"],
    title: "비!  ``' ƪ('-' ƪ) ",
    subtitle: "🌧☔🌧"
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#C1EDFD", "#B9B6E5"],
    title: "눈! ˚‧º·◝(⁰▿⁰)◜‧º·˚",
    subtitle: "❄⛄❄"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "맑음! ‧˚₊*̥(* ⁰̷̴͈꒨⁰̷̴͈)‧˚₊*̥",
    subtitle: "☀🌞☀"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#7f8c8d"],
    title: "흐림! ( •̅_•̅ )",
    subtitle: "☁➿☁"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "연무! ∑( ◦д⊙)‼",
    subtitle: "🌫😷🌫"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#7AA1D2"],
    title: "미스트!  ‧º·(˚ •́ ̯•̀ )‧º·˚",
    subtitle: "🌫💦🌫"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#6D6027", "#D39D38"],
    title: "황사! ╭⁽ •̀ﮧ •́╬⁾╮",
    subtitle: "🧹😷🧹"
  },
    Fog: {
    iconName: "weather-fog",
    gradient: ["#DBDBDB", "#999D9F"],
    title: "안개! –=͟͟͞͞ʕ•̫͡•ʔ",
    subtitle: "🌫👀🌫"
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Fog"
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "300",
    marginBottom: 10,
    paddingTop: 60,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
  },
});
