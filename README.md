# Angular Date Interceptor
An HTTP interceptor that automatically converts incoming date strings to javascript Date objects. You will need to provide the interceptor in your config providers section.

`provideHttpClient(withInterceptors([dateInterceptor]))`

## Notes
* You may get a depreciation warning for the rxjs tap operator.  Tap using multiple callback arguments is being depreciated.  Tap as used in this interceptor is not being depreciated.
