export const updateUserFormData = userFormData => {
  return {
    type: "UPDATED_USER_DATA",
    userFormData
  }
}

export const resetuserForm = () => {
  return {
    type: 'RESET_USER_FORM'
  }
}
