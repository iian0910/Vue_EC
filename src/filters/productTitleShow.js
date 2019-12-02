export default function (name) {
  var str = ''
  var len = name.length
  if (len > 1) {
    str = name.substring(0, 15) + ' ...'
  } else {
    return name
  }
  return str
}
