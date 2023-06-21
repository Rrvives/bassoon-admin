import { NIcon, useMessage } from 'naive-ui'
import { h } from 'vue'
export const routesToMenu = ( routes: any) => {
  const renderIcon = (icon: any) => {
    return () => h(NIcon, null, { default: () => h(icon) })
  }
  const convertRoutes = (routes:any) => {
    return routes.map( item => {
        if(item.hidden){
          if(item.children) {
            item = item.children[0]
          }
        }
        const label = item.meta.title
        const key = item.redirect || item.path
        const icon = item.icon
        if(item.children && item.children.length > 0) {
          item.children = item.children.filter( key => !key.hidden)
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
    })
  }
  const menuOptions = convertRoutes(routes)
  return {
    menuOptions
  }
}
