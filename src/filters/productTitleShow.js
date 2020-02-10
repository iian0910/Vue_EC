export default function (name) {
  let str = ''
  const len = name.length
  if (len > 10) {
    str = name.substring(0, 7) + ' ...'
  } else {
    return name
  }
  return str
}
