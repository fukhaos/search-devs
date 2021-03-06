import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Follower() {
  const navigation = useNavigation();
  const route = useRoute();

  const { stars } = route.params;

  function navigatieBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backTouchableOpacity}
          onPress={navigatieBack}
        >
          <Feather name="arrow-left" size={28} color="#0061ff" />
        </TouchableOpacity>
        <Text style={styles.descriptionHeader}>Estrelas</Text>
      </View>

      <Text style={styles.total}>{`Total de estrelas: ${stars.length}`}</Text>

      <FlatList
        data={stars}
        keyExtractor={(stars) => String(stars.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: star }) => (
          <View style={styles.list}>
            <View>
              <View style={styles.author}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 15,
                  }}
                  source={{ uri: star.owner.avatar_url }}
                />
                <Text style={styles.authorText}>{star.owner.login}</Text>
              </View>
              <Text style={styles.name}>{star.name}</Text>
            </View>

            <Text style={styles.description}>{star.description}</Text>
            <View style={styles.items}>
              <View style={styles.itemsContent}>
                {star.language && ( <Feather name="circle" size={14} /> )}

                {star.language && (
                  <Text style={styles.itemsText}>{star.language}</Text>
                )}
              </View>

              <View style={styles.itemsContent}>
                <Feather name="star" size={14} />

                <Text style={styles.itemsText}>{star.stargazers_count}</Text>
              </View>

              <View style={styles.itemsContent}>
                <AntDesign name="fork" size={16} />
                <Text style={styles.itemsText}>{star.forks}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
