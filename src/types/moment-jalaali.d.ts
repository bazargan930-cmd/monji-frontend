declare module 'moment-jalaali' {
  import * as moment from 'moment';
  export = moment;


  // اضافه کردن متدهای خاص jalaali
  namespace moment {
    function loadPersian(opts?: { usePersianDigits: boolean }): void;
  }
}
