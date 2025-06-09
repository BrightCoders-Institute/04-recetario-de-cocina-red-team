module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(expo|@expo|expo-constants|expo-modules-core|expo-font|expo-asset|react-native|@react-native|@unimodules|@react-navigation)/)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
