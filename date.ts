import { HttpInterceptorFn, HttpEventType } from '@angular/common/http';
import { RegExUtility } from '@utilities/regex';
import { tap } from 'rxjs';

// A helper function to check and convert date strings
function convertDates(object: any) {
  if ((!object) || (typeof object !== 'object')) { return object; }

  for (const key of Object.keys(object)) {
    const value = object[key];

    if ((typeof value === 'string') && (RegExUtility.isDate(value))) {
      object[key] = new Date(value);
    } else if (typeof value === 'object') {
      convertDates(value);
    }
  }
}

export const dateInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        const modifiedResponse = event.clone({ body: convertDates(event.body) });

        return modifiedResponse;
      }
      return event;
    })
  );
};
