/*
 * @description mutations代表动作
 * @author hwlv on 2017/9/1.
 */
import * as types from './mutation-types'
/*我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名*/
const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  },
  [types.SET_SEARCH_HISTORY](state, history) {//搜索历史
    state.searchHistory = history
  },
  [types.SET_PLAY_HISTORY](state, history) {//播放历史
    state.playHistory = history
  },
  [types.SET_FAVORITE_LIST](state, list) {//喜欢列表
    state.favoriteList = list
  }
}

export default mutations
