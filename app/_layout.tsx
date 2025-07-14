import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function RootLayout() {
    return (
        <SafeAreaView edges={["top"]} className="flex-1 bg-amber-50">
            <Slot />
        </SafeAreaView>
    );
}
