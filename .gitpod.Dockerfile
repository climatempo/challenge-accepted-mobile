FROM gitpod/workspace-full

USER gitpod

RUN npm install expo-cli --global \
    && npm install -g react-native-cli