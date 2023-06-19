import { createPinia } from 'pinia'
export const setupStore = (app: any) => {
  const store = createPinia()
  app.use(store)
}

export * from './modules/index'
