import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../service/token.service';

export const authGuard: CanActivateFn = (route, state) => {

  // const url = state.url;
  // localStorage.setItem('url', url);

  const token = inject(TokenService);
  const router = inject(Router)

  if(!token.getToken()){
    router.navigate(['/auth/login']);
    return false;
  }

  return true;
};
