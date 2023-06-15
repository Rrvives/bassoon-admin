export const routesToMenu = ( routes: any) => {
  const convertRoutes = (routes:any) => {
    return routes.map( item => {
      // if(!item.hidden) {
        if(item.hidden){
          console.log(item, 'item')
          if(item.children) {
            item = item.children[0]
          } else {
          }
        }
        const label = item.meta.title
        const key = item.redirect || item.path
        const icon = item.icon

        if(item.children && item.children.length > 0) {
          return {
            label,
            key,
            children: convertRoutes(item.children)
          }
        }
        return {
          label,
          key,
          icon
        }
      // }
    })
  }
  const menuOptions = convertRoutes(routes)
  console.log(routes)
  return {
    menuOptions
  }
}
