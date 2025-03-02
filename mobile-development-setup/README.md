# Mobile-development-setup

## Prerequisites

Before you begin, make sure you have the following tools installed:

- **Node.js LTS**: [Download Node.js](https://nodejs.org/).
- **VS Code**: [Download VS Code](https://code.visualstudio.com/).
- **macOS/Linux/Windows**: Any of these operating systems will work for Expo development.
- **Expo Go app**: Installed on your physical device (Android or iOS).

## Steps to Set Up Expo Go on Your Device

1. **Install Expo Go**:
   - For **Android**, search for "Expo Go" in the Google Play Store.
   - For **iOS**, search for "Expo Go" in the Apple App Store.

2. **Log in or Sign up** in Expo Go on your device.

3. **Create a New React Native Project** in VS Code:
   - Open **VS Code** and open the integrated terminal.
   - Run the following commands to create a new Expo app:
     ```bash
     npx create-expo-app mobile-development-setup
     cd mobile-development-setup
     npm start
     ```

4. **Scan the QR Code**:
   - Open **Expo Go** on your device and scan the QR code displayed in the **Expo Developer Tools** on your browser.

5. **Test the App**:
   - Your app should now run on your physical device. Any code changes you make in VS Code will be reflected live on the device.

6. **Challenges Faced & Solutions**:
1. Problem: I faced issues while installing Expo Go due to outdated app versions.
Solution: Use a VPN or sideload the APK for Android if necessary.

3. Node.js Version Conflicts

Problem: Older Node.js versions may cause compatibility issues with Expo CLI.

Solution: Use the latest LTS version of Node.js. Check your version using:

node -v

## Troubleshooting

- **App Not Loading**: Ensure both your device and computer are on the same Wi-Fi network.
- **Network Issues**: Restart the Expo Go app or clear its cache if needed.
- **Development Server Issues**: Try restarting the development server by running `npm start` again.

## Conclusion

Expo Go provides an easy and efficient way to test React Native apps on real devices without the need for device emulators. This setup should provide you with a smooth mobile development experience.
