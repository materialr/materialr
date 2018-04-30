import action from 'payload-action-creator';

export const UI_TOGGLE_LEFT_NAVIGATION_CLOSED = 'UI_TOGGLE_LEFT_NAVIGATION_CLOSED';
export const UI_TOGGLE_LEFT_NAVIGATION_OPEN = 'UI_TOGGLE_LEFT_NAVIGATION_OPEN';

export const uiToggleLeftNavigationClosed = action(UI_TOGGLE_LEFT_NAVIGATION_CLOSED);
export const uiToggleLeftNavigationOpen = action(UI_TOGGLE_LEFT_NAVIGATION_OPEN);
