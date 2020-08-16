import React from 'react';
import { RootContext } from './context';

export function withAppContext(Component) {
   return function WrapperComponent(props) {
      return (
         <RootContext.Consumer>
            {state => <Component {...props} context={state} /> }
         </RootContext.Consumer>
      )
   }
}