import React from "react";
import { StyleSheet, Dimensions, ScrollView, Text, View } from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");
class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <View>
            <Text style={styles.title}> Welcome to Mindfulness Manager</Text>
            <Text style={styles.box}>
              Here you can find tips on managing your mental health. Go to the
              menu to talk anonymously to a professional, or find resources in
              your area. If no one is available to chat, you can talk to our
              FeelBot.
            </Text>
          </View>
        </Block>
        <Block flex>
          <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card
              item={articles[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5
  },
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE
  },
  box: {
    borderWidth: 0,
    minHeight: 114,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: "center"
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2
  }
});

export default Home;
