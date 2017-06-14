export const initial = () => ({
  name: 'Example',
  propsList: [
    'title'
  ],
  stateList: []
})

export const changeName = (props, { target: { value } }) => ({
  name: value
})

export const addProp = (props) => ({ propsList }) => ({
  propsList: propsList.concat('')
})

export const changePropAtIndex = (props, { index, value }) => ({ propsList }) => ({
  propsList: propsList.map((original, currentIndex) => (
    (currentIndex == index) ? value : original
  ))
})

export const removePropAtIndex = (props, { index }) => ({ propsList }) => ({
  propsList: propsList.filter((name, currentIndex) => index !== currentIndex)
})

export const addState = (props) => ({ stateList }) => ({
  stateList: stateList.concat('')
})

export const changeStateAtIndex = (props, { index, value }) => ({ stateList }) => ({
  stateList: stateList.map((original, currentIndex) => (
    (currentIndex == index) ? value : original
  ))
})

export const removeStateAtIndex = (props, { index }) => ({ stateList }) => ({
  stateList: stateList.filter((name, currentIndex) => index !== currentIndex)
})
