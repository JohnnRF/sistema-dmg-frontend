import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // const url = state.url;
  // localStorage.setItem('url', url);
  

  return true;
};
