import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
} from "react-native";

const AnimatedRectangularToggle = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  // Animations
  const highlightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the highlight position based on selectedOption
    Animated.timing(highlightAnim, {
      toValue: selectedOption,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [selectedOption]);

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => handleToggle(1)}>
        <Animated.View
          style={[
            styles.highlight,
            {
              left: highlightAnim.interpolate({
                inputRange: [0, 1, 2],
                outputRange: ["0%", "33%", "66%"],
              }),
            },
          ]}
        />
        <Text style={styles.optionText}>Option 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleToggle(2)}>
        <Text style={styles.optionText}>Option 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleToggle(3)}>
        <Text style={styles.optionText}>Option 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 50,
  },
  option: {
    flex: 1,
    height: 40,
    backgroundColor: "#ECECEC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "relative",
  },
  highlight: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "yellow",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  optionText: {
    fontWeight: "bold",
  },
});

export default AnimatedRectangularToggle;
