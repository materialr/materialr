import action from 'payload-action-creator';

export const UI_TOGGLE_LEFT_NAVIGATION = 'UI_TOGGLE_LEFT_NAVIGATION';
export const UI_TOOLBAR_FIXED = 'UI_TOOLBAR_FIXED';
export const UI_TOOLBAR_FLEXIBLE = 'UI_TOOLBAR_FLEXIBLE';

export const uiToggleLeftNavigation = action(UI_TOGGLE_LEFT_NAVIGATION);
export const uiToolbarFixed = action(UI_TOOLBAR_FIXED);
export const uiToolbarFlexible = action(UI_TOOLBAR_FLEXIBLE);
