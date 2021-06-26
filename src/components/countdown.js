import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { primaryColors } from '../utils/colors';

const minutesToMilliseconds = min => min * 1000 * 60;
const formatTime = time => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 20, isPaused }) => {
  const interval = React.useRef(null);

  const countDown = () => {
    setMilliseconds(time => {
      if (time === 0) {
        // do more here
        return time;
      }
      const timeLeft = time - 1000;
      //   report progress
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [milliseconds, setMilliseconds] = useState(
    minutesToMilliseconds(minutes)
  );

  const minute = Math.floor(milliseconds / 1000 / 60) % 60;
  const seconds = Math.floor(milliseconds / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: primaryColors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
