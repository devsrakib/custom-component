import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  useColorScheme,
} from 'react-native';
import Div from './Div';

const BUTTON_DATA = [
  { id: 0, data: 'button one' },
  { id: 1, data: 'button two' },
  { id: 2, data: 'button two' },
  { id: 3, data: 'button two' },
  { id: 4, data: 'button two' },
  { id: 5, data: 'button two' },
  { id: 6, data: 'button two' },
  { id: 7, data: 'button two' },
];

function DropDwon(): React.JSX.Element {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [buttonLayout, setButtonLayout] = useState<{ x: number, y: number, width: number, height: number }>({ x: 0, y: 0, width: 0, height: 0 });

  const buttonRef = useRef<View | null>(null);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleButtonSelect = (index: number) => {
    setSelectedButton(index);
  };

  const onLayout = () => {
    if (buttonRef.current) {
      buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
        setButtonLayout({
          x: pageX,
          y: pageY,
          width: width,
          height: height,
        });
      });
    }
  };

  return (
    <Div>

      {/* Main button */}
      <TouchableOpacity
        ref={buttonRef}
        onPress={toggleDropdown}
        onLayout={onLayout}
        style={styles.mainButton}>
        <Text style={styles.buttonText}>Click me please</Text>
      </TouchableOpacity>

      {/* Dropdown list of buttons */}
      {isDropdownVisible && (
        <View
          style={[
            styles.dropdown,
            {
              top: buttonLayout.y + buttonLayout.height,
              left: buttonLayout.x,
              width: buttonLayout.width,
            },
          ]}>
          <FlatList
            data={BUTTON_DATA}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => handleButtonSelect(index)}
                style={[
                  styles.dropdownItem,
                  selectedButton === index && styles.selectedItem,
                ]}>
                <Text>{item.data}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  mainButton: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    zIndex: 10,
    height: 200
  },
  dropdownItem: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(203, 201, 201, 0.1)',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  selectedItem: {
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
  },
});

export default DropDwon;
