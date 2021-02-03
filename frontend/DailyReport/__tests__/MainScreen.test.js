import React from 'react';
import MainScreen from '../components/MainScreen';
import {render} from '@testing-library/react-native';

jest.mock('react-navigation', () => {});
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-navigation-stack', () => {});
jest.mock('react-native-reanimated', () => {});
jest.mock('react-navigation-drawer', () => {});
jest.mock('react-navigation-tabs', () => {});

describe('<MainScreen />', () => {
  test('renders without crashing', () => {
    const rendered = render(<MainScreen />);
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
