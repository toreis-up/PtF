export default ({store, redirect}) => {
  if (!store.getters['isLoggedin']) {
    return redirect('/login')
  }
}