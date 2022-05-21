import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CardTabRouteNames, BOTTOM_TABS, ICON_SIZE} from '../../constants';
import {Dashboard, Settings} from '../../screens';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const {Navigator, Screen} = createBottomTabNavigator();

const screenOptions = {
  tabBarLabelStyle: {fontSize: 14},
  tabBarShowLabel: false,
};

const dashboardOptions = {
  headerShown: false,
  tabBarIcon: () => (
    <FontAwesomeIcon icon={BOTTOM_TABS.dashboard.icon} size={ICON_SIZE} />
  ),
  title: BOTTOM_TABS.dashboard.name,
};

const settingOptions = {
  headerTitle: BOTTOM_TABS.settings.name,
  tabBarIcon: () => (
    <FontAwesomeIcon icon={BOTTOM_TABS.settings.icon} size={ICON_SIZE} />
  ),
  title: BOTTOM_TABS.settings.name,
  headerTitleAlign: 'center',
  headerRightContainerStyle: {paddingEnd: 20},
};

export const CardTab = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name={CardTabRouteNames.CARD_TAB_DASHBOARD}
        component={Dashboard}
        options={dashboardOptions}
      />
      <Screen
        name={CardTabRouteNames.CARD_TAB_SETTINGS}
        component={Settings}
        options={settingOptions as BottomTabNavigationOptions}
      />
    </Navigator>
  );
};
