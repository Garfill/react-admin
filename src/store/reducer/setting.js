import { defaultSettingState } from './state'

function settingReducer(state = defaultSettingState, action) {
  switch (action.type) {
    case 'toggleSider':
      return Object.assign({}, state, {
        siderCollapsed: action.value
      })
    default:
      break;
  }
  return state
}

export default settingReducer