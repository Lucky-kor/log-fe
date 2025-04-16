import React from "react";
import { View, StyleSheet, FlatList, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Text from "../common/Text";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DUMMY_DATA = [
  {
    id: "1",
    title: "피그마 완성하기",
    time: "11:30",
    endTime: "14:30",
    subTitle: "Mobile UI Kit",
  },
  {
    id: "2",
    title: "저녁 먹기",
    time: "11:30",
    endTime: "14:30",
    subTitle: "Mobile UI Kit",
  },
  {
    id: "3",
    title: "Choose New Pages",
    time: "11:30",
    endTime: "14:30",
    subTitle: "Mobile UI Kit",
  },
  {
    id: "4",
    title: "디자인 시스템 구축",
    time: "15:00",
    endTime: "17:30",
    subTitle: "Mobile UI Kit",
  },
  {
    id: "5",
    title: "프로토타입 테스트",
    time: "18:00",
    endTime: "20:00",
    subTitle: "Mobile UI Kit",
  },
  {
    id: "6",
    title: "최종 기획서 작성",
    time: "20:30",
    endTime: "22:00",
    subTitle: "Mobile UI Kit",
  },
];

const ScheduleItem = ({ title, time, endTime, subTitle }) => (
  <View style={styles.scheduleItem}>
    <View style={styles.leftContent}>
      <Image
        source={require("../../assets/schedule/check.png")}
        style={styles.checkIcon}
      />
      <View style={styles.textContent}>
        <Text variant="bold" size={16} color="#0A4DAA">
          {title}
        </Text>
        <Text variant="regular" size={12} color="#666" style={styles.subTitle}>
          {subTitle}
        </Text>
      </View>
    </View>
    <View style={styles.timeWrapper}>
      <Text variant="regular" size={14} color="#1170DF">
        {time}
      </Text>
      <Text variant="regular" size={14} color="#666">
        {" "}
        To{" "}
      </Text>
      <Text variant="regular" size={14} color="#1170DF">
        {endTime}
      </Text>
    </View>
  </View>
);

export default function MainScheduleList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.sectionTitleContainer}>
        <View style={styles.titleWrapper}>
          <View>
            <Text
              variant="semibold"
              size={20}
              color="#1170DF"
              style={styles.sectionTitle}
            >
              Schedule
            </Text>
            <View style={styles.underline} />
          </View>
        </View>
        <Pressable
          style={styles.rightButton}
          onPress={() => {
            // TODO: 기능 구현
          }}
        >
          <View style={styles.briefingButton}>
            <Icon name="waveform" size={20} color="#69BAFF" />
            <Text
              variant="medium"
              size={16}
              color="#69BAFF"
              style={styles.briefingText}
            >
              Briefing
            </Text>
            <Icon
              name="waveform"
              size={20}
              color="#69BAFF"
              style={styles.rightWaveform}
            />
          </View>
        </Pressable>
      </View>
      <FlatList
        data={DUMMY_DATA}
        renderItem={({ item }) => <ScheduleItem {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  sectionTitle: {
    marginBottom: 8,
  },
  underline: {
    width: 24,
    height: 2,
    backgroundColor: "#1170DF",
    borderRadius: 1,
  },
  rightButton: {
    height: 44,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(105, 186, 255, 0.1)",
    shadowColor: "#69BAFF",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  briefingButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rightWaveform: {
    transform: [{ scaleX: -1 }],
  },
  briefingText: {
    marginHorizontal: 6,
  },
  listContent: {
    gap: 12,
  },
  scheduleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F5F9FF",
    borderRadius: 12,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    opacity: 0.8,
  },
  textContent: {
    gap: 4,
  },
  subTitle: {
    opacity: 0.8,
  },
  timeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
