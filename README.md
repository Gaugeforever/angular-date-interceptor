# angular-date-interceptor
An http interceptor that automatically converts incoming date strings to javascript Date objects. You will need to provide the interceptor in your config providers section.

`provideHttpClient(withInterceptors([dateInterceptor]))`
