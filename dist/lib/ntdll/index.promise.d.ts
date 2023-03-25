import { FnName, LoadSettings } from 'win32-def';
import { DllNames } from '../types.js';
import { apiDef, Win32Fns } from './api.js';
export { apiDef };
export { Win32Fns };
export declare const dllName = DllNames.ntdll;
export declare const load: (fns?: FnName[], settings?: LoadSettings) => import("win32-def").PromiseFnModel<Win32Fns>;
//# sourceMappingURL=index.promise.d.ts.map