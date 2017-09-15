/*
 * @description
 * @author hwlv on 2017/9/1.
 */
import {playMode} from 'common/js/config'
const state={
  singer:{},
  playing:false,
  /*全屏*/
  fullScreen:false,
  /*播放列表*/
  playlist:[],
  /*顺序列表*/
  sequenceList:[],
  /*播放模式*/
  mode: playMode.sequence,
  /*当前索引*/
  currentIndex: -1,
  disc: {},
}
export default state
