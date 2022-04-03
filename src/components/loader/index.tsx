import React from 'react';
import {ActivityIndicator, ViewProps} from 'react-native';

interface LoaderProps extends ViewProps {
  color?: string;
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({
  color = '#0154AD',
  size = 30,
  ...props
}: LoaderProps) => <ActivityIndicator color={color} size={size} {...props} />;

export default Loader;
