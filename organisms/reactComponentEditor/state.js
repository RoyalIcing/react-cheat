export const initial = () => ({
  name: 'Example',
  propsList: [
    'title'
  ],
  stateList: []
})

export const changeName = ({ value }) => ({
  name: value
})

export const addProp = () => ({ propsList }) => ({
  propsList: propsList.concat('')
})

export const changePropAtIndex = ({ index, value }) => ({ propsList }) => ({
  propsList: propsList.map((original, currentIndex) => (
    (currentIndex == index) ? value : original
  ))
})

export const removePropAtIndex = ({ index }) => ({ propsList }) => ({
  stateList: stateList.filter((name, currentIndex) => index !== currentIndex)
})

export const addState = () => ({ stateList }) => ({
  stateList: stateList.concat('')
})

export const changeStateAtIndex = ({ index, value }) => ({ stateList }) => ({
  stateList: stateList.map((original, currentIndex) => (
    (currentIndex == index) ? value : original
  ))
})

export const removeStateAtIndex = ({ index }) => ({ stateList }) => ({
  stateList: stateList.filter((name, currentIndex) => index !== currentIndex)
})
