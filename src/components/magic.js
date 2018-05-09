export const convertSectionNameToCubeSide = (section) => {
  let side
  switch (section) {
    case 'about':
      side = 'front'
      break
    case 'mywork':
      side = 'right'
      break
    case 'contact':
      side = 'left'
      break
    case 'friends':
      side = 'back'
      break
    default:
      side = 'front'
  }
  return side
}