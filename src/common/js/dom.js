/**
 * Created by hwlv on 2017/7/27.
 */
/*添加class*/
export function addClass (el, className) {
  if (hasClass(el, className))return
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
/*判断是否有某个class*/
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
/*元素通过val参数设置和获取data-*这样的自定义属性(自定义的属性一般是加data-前缀)*/
export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}
