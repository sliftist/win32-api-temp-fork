import * as M from 'win32-def';
export interface Win32Fns {
    BringWindowToTop: (hWnd: M.HWND) => M.BOOL;
    ClientToScreen: (hWnd: M.HWND, lpPoint: M.LPPOINT) => M.BOOL;
    /** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-closewindow */
    CloseWindow: (hWnd: M.HWND) => M.BOOL;
    CreateWindowExW: (dwExStyle: M.DWORD, lpClassName: M.LPCTSTR | null, lpWindowName: M.LPCTSTR | null, dwStyle: M.DWORD, x: M.INT, y: M.INT, nWidth: M.INT, nHeight: M.INT, hWndParent: M.HWND, HMENU: M.HMENU, HINSTANCE: M.HINSTANCE, LPVOID: M.LPVOID) => M.HWND;
    DefWindowProcW: (hWnd: M.HWND, Msg: M.UINT, wParam: M.WPARAM, lParam: M.LPARAM) => M.LRESULT;
    /** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-destroywindow */
    DestroyWindow: (hWnd: M.HWND) => M.BOOL;
    DispatchMessageW: (lpMsg: M.LPMSG) => M.LRESULT;
    /** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaydevicesw */
    EnumDisplayDevicesW: (lpDevice: M.LPCWSTR, iDevNum: M.DWORD, lpDisplayDevice: M.PDISPLAY_DEVICEW, dwFlags: M.DWORD) => M.BOOL;
    EnumThreadWindows: (dwThreadId: M.DWORD, lpfn: M.WNDENUMPROC, lParam: M.LPARAM) => M.BOOL;
    EnumWindows: (lpEnumFunc: M.WNDENUMPROC, lParam: M.LPARAM) => M.BOOL;
    FindWindowExW: (hwndParent: M.HWND, hwndChildAfter: M.HWND, lpszClass: M.LPCTSTR | null, lpszWindow: M.LPCTSTR | null) => M.HWND;
    FlashWindow: (hWnd: M.HWND, bInvert: M.BOOL) => M.BOOL;
    FlashWindowEx: (pfwi: M.PFLASHWINFO) => M.BOOL;
    GetAncestor: (hwnd: M.HWND, gaFlags: M.UINT) => M.HWND;
    /** https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getalttabinfow */
    GetAltTabInfoW: (hWnd: M.HWND, iItem: M.INT, pati: M.PALTTABINFO, pszItemText: M.LPWSTR | null, cchItemText: M.INT) => M.BOOL;
    /**
     * Copies the caret's position to the specified POINT structure.
     * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcaretpos
     */
    GetCaretPos: (lpPoint: M.LPPOINT) => M.BOOL;
    GetClassInfoExW: (hinst: M.HINSTANCE, lpszClass: M.LPCTSTR, LPWNDCLASSEX: M.LPWNDCLASSEX) => M.BOOL;
    GetForegroundWindow: () => M.HWND;
    GetMessageW: (lpMsg: M.LPMSG, HWND: M.HWND, wMsgFilterMin: M.UINT, wMsgFilterMax: M.UINT) => M.BOOL;
    GetParent: (hWnd: M.HWND) => M.HWND;
    /** https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getrawinputdeviceinfow */
    GetRawInputDeviceInfoW: (hDevice: M.HANDLE, uiCommand: M.UINT, pData: M.LPVOID, pcbSize: M.PUINT) => M.UINT;
    /** https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getrawinputdevicelist */
    GetRawInputDeviceList: (
    /** An array of RAWINPUTDEVICELIST */
    pRawInputDeviceList: M.PRAWINPUTDEVICELIST, 
    /**
     * If this value is less than the number of devices attached to the system,
     * the function returns the actual number of devices in this variable
     * and fails with ERROR_INSUFFICIENT_BUFFER.
     */
    puiNumDevices: M.PUINT, cbSize: M.UINT) => M.INT;
    GetTopWindow: (hWnd: M.HWND) => M.HWND;
    GetWindow: (hWnd: M.HWND, uCmd: M.UINT) => M.HWND;
    GetWindowInfo: (hwnd: M.HWND, pwi: M.PWINDOWINFO) => M.BOOL;
    GetWindowLongW: (hWnd: M.HWND, nIndex: M.INT) => M.LONG;
    /** only under x64 */
    GetWindowLongPtrW: (hWnd: M.HWND, nIndex: M.INT) => M.LONG_PTR;
    /**
     * @see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowrect
     */
    GetWindowRect: (hWnd: M.HWND, LPRECT: M.LPRECT) => M.BOOL;
    /**
     * @docs https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowtextw
     */
    GetWindowTextW: (hWnd: M.HWND, lpString: M.LPCTSTR, nMaxCount: M.INT) => M.INT;
    GetWindowThreadProcessId: (hWnd: M.HWND, lpdwProcessId: M.LPDWORD | null) => M.DWORD;
    /**
     * @docs https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-monitorfromwindow
     */
    MonitorFromWindow: (hWnd: M.HWND, dwFlags: M.DWORD) => M.HMONITOR;
    IsIconic: (hWnd: M.HWND) => M.BOOL;
    IsWindowVisible: (hWnd: M.HWND) => M.BOOL;
    PeekMessageW: (lpMsg: M.LPMSG, HWND: M.HWND, wMsgFilterMin: M.UINT, wMsgFilterMax: M.UINT, wRemoveMsg: M.UINT) => M.BOOL;
    /**
     * ref: https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-postmessagew
     */
    PostMessageW: (hWnd: M.HWND, Msg: M.UINT, wPARAM: M.WPARAM, lPARAM: M.LPARAM) => M.BOOL;
    /** https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-printwindow */
    PrintWindow: (hwnd: M.HWND, hdcBlt: M.HDC, nFlags: M.UINT) => M.BOOL;
    RegisterClassExW: (lpwcx: M.LPWNDCLASSEX) => M.ATOM;
    /**
     * ref: https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-sendmessagew
     */
    SendMessageW: (hWnd: M.HWND, Msg: M.UINT, wPARAM: M.WPARAM, lPARAM: M.LPARAM) => M.LRESULT;
    /** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setforegroundwindow */
    SetForegroundWindow: (hWnd: M.HWND) => M.BOOL;
    SetWindowPos: (hWnd: M.HWND, hWndInsertAfter: M.HWND | null, X: M.INT, Y: M.INT, cx: M.INT, cy: M.INT, uFlags: M.UINT) => M.BOOL;
    SetWindowTextW: (hWnd: M.HWND, lpString: M.LPCTSTR | null) => M.BOOL;
    SetWinEventHook: (eventMin: M.UINT, eventMax: M.UINT, hmodWinEventProc: M.HMODULE, lpfnWinEventProc: M.WINEVENTPROC, idProcess: M.DWORD, idThread: M.DWORD, dwflags: M.UINT) => M.HWINEVENTHOOK;
    ShowWindow: (hWnd: M.HWND, nCmdShow: M.INT) => M.BOOL;
    TranslateMessage: (lpMsg: M.LPMSG) => M.BOOL;
    TranslateMessageEx: (lpMsg: M.LPMSG) => M.BOOL;
    UnhookWinEvent: (hWinEventHook: M.HWINEVENTHOOK) => M.BOOL;
    UpdateWindow: (hWnd: M.HWND) => M.BOOL;
}
export declare const apiDef: M.DllFuncs<Win32Fns>;
//# sourceMappingURL=api.d.ts.map