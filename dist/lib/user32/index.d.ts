import { ExpandFnModel, FnName, LoadSettings } from 'win32-def';
import { DllNames } from '../types.js';
import { apiDef, Win32Fns } from './api.js';
import * as constants from './constants.js';
export { apiDef };
export { constants };
export { Win32Fns };
export declare const dllName = DllNames.user32;
/**
 * @deprecated use promise instead
 * ```ts
 * import { User32 } from 'win32-api/promise'
 * const user32 = User32.load()
 * const hWnd = await user32.FindWindowExW(...)
 * ```
 */
export declare const load: (fns?: FnName[], settings?: LoadSettings) => ExpandFnModel<Win32Fns>;
//# sourceMappingURL=index.d.ts.map