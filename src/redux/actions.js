export const move = index => ({
  type: 'MOVE',
  payload: index
})

export const view = () => ({
  type: 'VIEW'
})


export const reset = () => ({
  type: 'RESET'
})
