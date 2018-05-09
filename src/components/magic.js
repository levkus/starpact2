export const convertSectionNameToCubeSide = (section) => {
  let side
  switch (section) {
    case 'story':
      side = 'front'
      break
    case 'portfolio':
      side = 'right'
      break
    case 'contact':
      side = 'left'
      break
    default:
      side = 'front'
  }
  return side
}