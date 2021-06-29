import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/roundedButton';
import { primaryColors } from '../../utils/colors';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>
            <FlatList
              style={styles.flatList}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />

            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: status => ({
    color: status > 1 ? 'red' : 'lawngreen',
    fontSize: fontSizes.md,
  }),
  title: {
    color: primaryColors.white,
    fontSize: fontSizes.lg,
  },
  safeArea: {
    flex: 0.5,
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
