import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../service/token.service';
import { inject } from '@angular/core';

export const redirectGuard: CanActivateFn = (route, state) => {


  const token = inject(TokenService);
  const router = inject(Router)

  if(token.getToken()){
    router.navigate(['/']);
  }

  return true;
};
