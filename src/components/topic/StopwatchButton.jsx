import {
  View,
  Text,
  Button,
  AppState,
  AppStateStatus,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "dripsy";
import SecondaryButton from "../common/SecondaryButton";

const StopwatchButton = ({ updateStatus }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const appState = useRef(AppState.currentState);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (
        appState.current === "active" &&
        nextAppState === "background" &&
        running
      ) {
        pauseStopwatch();
        ToastAndroid.show(
          "Timer will be paused until you're back!",
          ToastAndroid.SHORT
        );
      } else if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active" &&
        !running
      ) {
        resumeStopwatch();
        ToastAndroid.show("Timer resumed", ToastAndroid.SHORT);
      }
      appState.current = nextAppState;
    };

    const appStateListener = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      appStateListener.remove();
    };
  }, [running]);

  const startStopwatch = () => {
    setRunning(true);
    updateStatus(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseStopwatch = () => {
    setRunning(false);
    updateStatus(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeStopwatch = () => {
    setRunning(true);
    updateStatus(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetStopwatch = () => {
    setTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setRunning(false);
    updateStatus(false);
  };

  const formatTime = (seconds) => {
    const pad = (num) => {
      return num < 10 ? "0" + num : num;
    };
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  return (
    <>
      {time > 0 && (
        <Box sx={{ flexDirection: "row", p: 12, pt: 0, alignItems: "center" }}>
          <Text
            style={{
              flexGrow: 1,
              textAlign: "center",
              color: "red",
              fontSize: 18,
            }}
          >
            {formatTime(time)}
          </Text>
          {!running && <Text onPress={resetStopwatch}>reset</Text>}
        </Box>
      )}
      <Button
        title={running ? "Pause" : time > 0 ? "Continue" : "Start revising"}
        onPress={running ? pauseStopwatch : startStopwatch}
      />
    </>
  );
};

export default StopwatchButton;
