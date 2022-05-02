import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Members from "./Members";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Projects() {}

function Home() {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen
          name="Projects"
          component={Projects}
          options={{
            tabBarIcon: () => {
              <FontAwesome name="briefcase" size={24} color="black" />;
            },
          }}
        />
        <Tab.Screen
          name="Members"
          component={Members}
          tabBarIcon={() => {
            <Ionicons name="md-people-sharp" size={24} color="black" />;
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default Home;
