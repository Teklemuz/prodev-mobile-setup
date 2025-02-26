# prodev-mobile-setup
# Mobile Development Setup

## Project Overview

This repository documents the setup process for mobile development using the Expo Framework for React Native. The goal is to establish a smooth development workflow and ensure that all necessary tools are correctly installed.

## Prerequisites

Before proceeding, ensure you have the following installed:

- **Node.js LTS** ([Download](https://nodejs.org/))
- **VS Code (Visual Studio Code)** ([Download](https://code.visualstudio.com/))
- **A compatible operating system** ( Windows)

## Why Use Expo Go?

Expo Go simplifies mobile app development by allowing you to test and run React Native applications on your physical device. It eliminates the need for complex emulators and provides a cost-effective way to test applications on both iOS and Android devices.

## Steps to Install Expo Go

1. Visit the official [Expo Go homepage](https://expo.dev/go).
2. Select the latest SDK version.
3. Install Expo Go on your device:
   - **Android:** Download from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
4. Open the Expo Go app on your device.
5. Create a new Expo account or log in if you already have one.

## Challenges Faced & Solutions

### 1. **Installation Issues on Mobile Devices**

- **Problem:** I faced issues while installing Expo Go due to regional restrictions.
- **Solution:** Use a VPN or sideload the APK for Android if necessary. 

### 2. **Node.js Version Conflicts**

- **Problem:** Older Node.js versions may cause compatibility issues with Expo CLI.
- **Solution:** Use the latest LTS version of Node.js. Check your version using:
  ```sh
  node -v
  ```
  Upgrade if necessary via [nvm](https://github.com/nvm-sh/nvm) (recommended) or directly from [Node.js](https://nodejs.org/).

### 3. **Expo CLI Not Recognized**

- **Problem:** Running `expo` commands results in "command not found" errors.
- **Solution:** Ensure Expo CLI is installed globally:
  ```sh
  npm install -g expo-cli
  ```
  Verify installation with:
  ```sh
  expo --version
  ```

### 4. **Device Connection Issues**

- **Problem:** Expo Go fails to detect projects from the development machine.
- **Solution:** Ensure both your device and development machine are connected to the same Wi-Fi network. If issues persist, use the `expo start --tunnel` option.

## Next Steps

- Verify the setup by running a sample React Native project:
  ```sh
  expo init mobile-development-setup
  cd mobile-development-setup
  expo start
  ```
- Scan the QR code from Expo Go to test the app on your device.
- Continue setting up additional dependencies for development.

## Conclusion

By following these steps, I have a functional mobile development environment with Expo Go. If you encounter further issues, refer to the [Expo documentation](https://docs.expo.dev/) or seek community support.
