import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/ui/components/HapticTab";
import BlurTabBarBackground from "@/ui/components/TabBarBackground.ios";
import { CircleUserRound, HouseIcon, Paperclip } from "lucide-react-native";
import { useStyles } from "react-native-unistyles";

export default function TabLayout() {
  const { theme } = useStyles();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary.main,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: BlurTabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 70,
            bottom: 0,
            left: 0,
          },
          default: {
            height: 70,
            bottom: 0,
            left: 0,
          },
        }),
        tabBarItemStyle: {
          paddingVertical: 8,
          paddingHorizontal: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Domácnost",
          tabBarIcon: ({ color }) => (
            <HouseIcon size={24} strokeWidth={2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Paperclip size={24} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-profile"
        options={{
          title: "Můj profil",
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: theme.colors.error.main,
            color: theme.colors.grey["100"],
          },
          tabBarIcon: ({ color }) => (
            <CircleUserRound size={24} color={color} strokeWidth={2} />
          ),
        }}
      />
    </Tabs>
  );
}
