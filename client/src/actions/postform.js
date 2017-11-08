export const updatePostFormData = postFormData => {
  return {
    type: "UPDATED_DATA",
    postFormData
  }
}

export const resetpostForm = () => {
  return {
    type: 'RESET_POST_FORM'
  }
}
