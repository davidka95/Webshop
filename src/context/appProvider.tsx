import React from 'react'
import {ProductProvider} from './productProvider'

interface AppProviderProps {
  children: React.ReactElement
}

const providers: React.ReactElement[] = [<ProductProvider />]

export const AppProvider = ({children: initial}: AppProviderProps) =>
  providers.reduce(
    (children, parent) => React.cloneElement(parent, {children}),
    initial,
  )
