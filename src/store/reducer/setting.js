import { defaultSettingState } from './state'

function settingReducer(state = defaultSettingState, { type, payload }) {
  switch (type) {
    case 'toggleSider':
      return Object.assign({}, state, {
        sidebarOpen: payload
      })
    default:
      break;
  }
  return state
}

export default settingReducer