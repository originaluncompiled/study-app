import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons size={28} name="folder" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

