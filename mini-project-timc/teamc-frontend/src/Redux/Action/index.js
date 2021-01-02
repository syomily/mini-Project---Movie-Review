const requestCategoryPage = (page) => ({
  type: 'REQUEST_CATEGORY_PAGE',
  payload: {
    page
  }
})
  
const receiveCategoryPage = (page, results) => ({
  type: 'RECEIVE_CATEGORY_PAGE',
  payload: {
    page,
    results
  }
})

  