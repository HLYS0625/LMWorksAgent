// The top-level state object
// eslint-disable-next-line @typescript-eslint/no-empty-interface
import * as SystemInfoStore from "./HomeStore";

export interface ApplicationState {
	HomeStore: SystemInfoStore.HomeState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
	SystemInfoStore: SystemInfoStore.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
	(dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
