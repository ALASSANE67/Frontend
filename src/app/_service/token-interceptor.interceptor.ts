import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6YW1wYWxpZ3JlQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTcxNTk3OTA1OSwiaWF0IjoxNzE1OTQzMDU5fQ.wsWF5VjSXFVDOk10m8pLW7bfPh4Zd-QFoeUNvKD7WlA'
 let jwttoken = req.clone({
  setHeaders :{
    Authorization:'bearer '+ _token
  }
 })
  return next(jwttoken);
};
