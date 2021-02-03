import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from '../components/MainScreen';

it('renders correctly', () => {
  renderer.create(<MainScreen />);
});
