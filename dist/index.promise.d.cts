import * as M from 'win32-def';
import { FnName, LoadSettings } from 'win32-def';

interface Win32Fns$6 {
    InitCommonControlsEx: (lpInitCtrls: M.LPINITCOMMONCONTROLSEX) => M.BOOL;
}
declare const apiDef$6: M.DllFuncs<Win32Fns$6>;

declare const dllName$6 = DllNames.comctl32;
declare const load$6: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns$6>;

declare namespace index_promise$6 {
  export {
    Win32Fns$6 as Win32Fns,
    apiDef$6 as apiDef,
    dllName$6 as dllName,
    load$6 as load,
  };
}

interface Win32Fns$5 {
    /**
     * Creates a bitmap compatible with the device that is associated with the specified device context.
     * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-createcompatiblebitmap
     */
    CreateCompatibleBitmap: (hdc: M.HDC, cx: M.INT, cy: M.INT) => M.HBITMAP;
    /**
     * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-createcompatibledc
     */
    CreateCompatibleDC: (hdc: M.HDC) => M.HDC;
}
declare const apiDef$5: M.DllFuncs<Win32Fns$5>;

declare const dllName$5 = DllNames.gdi32;
declare const load$5: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns$5>;

declare namespace index_promise$5 {
  export {
    Win32Fns$5 as Win32Fns,
    apiDef$5 as apiDef,
    dllName$5 as dllName,
    load$5 as load,
  };
}

interface Win32Fns$4 {
    /**
     * https://msdn.microsoft.com/en-us/library/windows/desktop/ms679351(v=vs.85).aspx
     * dwLanguageId: https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693(v=vs.85).aspx
     */
    FormatMessageW: (dwFlags: M.DWORD, lpSource: M.LPCVOID | null, dwMessageId: M.DWORD, dwLanguageId: M.DWORD, // 0x0409: US, 0x0000: Neutral locale language
    lpBuffer: M.LPTSTR, nSize: M.DWORD, Arguments: M.va_list | null) => M.DWORD;
    FreeConsole: () => M.BOOL;
    GenerateConsoleCtrlEvent: (dwCtrlEvent: M.DWORD, dwProcessGroupId: M.DWORD) => M.BOOL;
    /**
     * Not works correctly
     * @see https://github.com/node-ffi/node-ffi/issues/261
     */
    GetLastError: () => M.DWORD;
    GetModuleHandleW: (lpModuleName: M.LPCTSTR | null) => M.HMODULE;
    GetModuleHandleExW: (dwFlags: M.DWORD, lpModuleName: M.LPCTSTR | null, phModule: M.HMODULE) => M.BOOL;
    GetProcessHeaps: (NumberOfHeaps: M.DWORD, ProcessHeaps: M.PHANDLE) => M.DWORD;
    /** https://docs.microsoft.com/en-us/windows/desktop/api/processthreadsapi/nf-processthreadsapi-getsystemtimes */
    GetSystemTimes: (lpIdleTime: M.PFILETIME, lpKernelTime: M.PFILETIME, lpUserTime: M.PFILETIME) => M.BOOL;
    HeapFree: (hHeap: M.HANDLE, dwFlags: M.DWORD, lpMem: M.LPVOID | null) => M.BOOL;
    OpenProcess: (dwDesiredAccess: M.DWORD, bInheritHandle: M.BOOL, dwProcessId: M.DWORD) => M.HANDLE;
    /** https://docs.microsoft.com/en-us/windows/win32/api/debugapi/nf-debugapi-outputdebugstringw */
    OutputDebugStringW: (lpOutputString: M.LPCTSTR) => M.VOID;
    /** https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx */
    SetLastError: (dwErrCode: M.DWORD) => M.VOID;
    /**
     * Enables an application to inform the system that it is in use,
     * thereby preventing the system from entering sleep or turning off
     * the display while the application is running.
     *
     * @example
     * // Television recording is beginning. Enable away mode and prevent the sleep idle time-out.
     * SetThreadExecutionState(ES_CONTINUOUS | ES_SYSTEM_REQUIRED | ES_AWAYMODE_REQUIRED);
     *
     * // Clear EXECUTION_STATE flags to disable away mode and allow the system to idle to sleep normally.
     * SetThreadExecutionState(ES_CONTINUOUS);
     *
     * @param esFlags The thread's execution requirements.
     * This parameter can be one or more of the following values. Join them with single |
     * @returns If the function succeeds, the return value is the previous thread execution state.
     * If the function fails, the return value is NULL.
     * @see[Docs]{@link https://docs.microsoft.com/en-us/windows/desktop/api/winbase/nf-winbase-setthreadexecutionstate}
     *
     * Note: The return value NULL would be converted to zero by node-ffi
     */
    SetThreadExecutionState: (esFlags: M.UINT) => M.UINT;
}
declare const apiDef$4: M.DllFuncs<Win32Fns$4>;

declare const dllName$4 = DllNames.kernel32;
declare const load$4: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns$4>;

declare namespace index_promise$4 {
  export {
    Win32Fns$4 as Win32Fns,
    apiDef$4 as apiDef,
    dllName$4 as dllName,
    load$4 as load,
  };
}

interface Win32Fns$3 {
    NtQueryInformationProcess: (ProcessHandle: M.HANDLE, ProcessInformationClass: number, ProcessInformation: M.PVOID, // _Out_
    ProcessInformationLength: M.ULONG, ReturnLength: M.PULONG | null) => M.NTSTATUS;
}
declare const apiDef$3: M.DllFuncs<Win32Fns$3>;

declare const dllName$3 = DllNames.ntdll;
declare const load$3: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns$3>;

declare namespace index_promise$3 {
  export {
    Win32Fns$3 as Win32Fns,
    apiDef$3 as apiDef,
    dllName$3 as dllName,
    load$3 as load,
  };
}

interface Win32Fns$2 {
    /**
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/enddocprinter
     */
    EndDocPrinter: (hPrinter: M.HANDLE) => M.BOOL;
    EndPagePrinter: (hPrinter: M.HANDLE) => M.BOOL;
    /**
     *
     * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/writeprinter
     */
    WritePrinter: (hPrinter: M.HANDLE, pBuf: M.LPVOID, cbBuf: M.DWORD, pcWritten: M.LPDWORD) => M.BOOL;
}
declare const apiDef$2: M.DllFuncs<Win32Fns$2>;

declare const dllName$2 = DllNames.winspool;
declare const load$2: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns$2>;

declare namespace index_promise$2 {
  export {
    Win32Fns$2 as Win32Fns,
    apiDef$2 as apiDef,
    dllName$2 as dllName,
    load$2 as load,
  };
}

interface Win32Fns$1 {
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
declare const apiDef$1: M.DllFuncs<Win32Fns$1>;

declare const enum CmdShow {
    SW_HIDE = 0,
    SW_SHOWNORMAL = 1,
    SW_SHOWMINIMIZED = 2,
    SW_SHOWMAXIMIZED = 3,
    SW_MAXIMIZE = 3,
    SW_SHOWNOACTIVATE = 4,
    SW_SHOW = 5,
    SW_MINIMIZE = 6,
    SW_SHOWMINNOACTIVE = 7,
    SW_SHOWNA = 8,
    SW_RESTORE = 9,
    SW_SHOWDEFAULT = 10,
    SW_FORCEMINIMIZE = 11
}
declare const enum CmdSetPos {
    HWND_BOTTOM = 1,
    HWND_NOTOPMOST = -2,
    HWND_TOP = 0,
    HWND_TOPMOST = -1,
    SWP_ASYNCWINDOWPOS = 16384,
    SWP_DEFERERASE = 8192,
    SWP_DRAWFRAME = 32,
    SWP_FRAMECHANGED = 32,
    SWP_HIDEWINDOW = 128,
    SWP_NOACTIVATE = 16,
    SWP_NOCOPYBITS = 256,
    SWP_NOMOVE = 2,
    SWP_NOOWNERZORDER = 512,
    SWP_NOREDRAW = 8,
    SWP_NOREPOSITION = 512,
    SWP_NOSENDCHANGING = 1024,
    SWP_NOSIZE = 1,
    SWP_NOZORDER = 4,
    SWP_SHOWWINDOW = 64
}
declare const WS_BORDER = 8388608;
declare const WS_CAPTION = 12582912;
declare const WS_CHILD = 1073741824;
declare const WS_CLIPCHILDREN = 33554432;
declare const WS_CLIPSIBLINGS = 67108864;
declare const WS_DISABLED = 134217728;
declare const WS_DLGFRAME = 4194304;
declare const WS_GROUP = 131072;
declare const WS_HSCROLL = 1048576;
declare const WS_ICONIC = 536870912;
declare const WS_MAXIMIZE = 16777216;
declare const WS_MAXIMIZEBOX = 65536;
declare const WS_MINIMIZE = 536870912;
declare const WS_MINIMIZEBOX = 131072;
declare const WS_OVERLAPPED = 0;
declare const WS_POPUP = 2147483648;
declare const WS_SIZEBOX = 262144;
declare const WS_SYSMENU = 524288;
declare const WS_TABSTOP = 65536;
declare const WS_THICKFRAME = 262144;
declare const WS_TILED = 0;
declare const WS_VISIBLE = 268435456;
declare const WS_VSCROLL = 2097152;
declare const WS_OVERLAPPEDWINDOW: number;
declare const WS_POPUPWINDOW: number;
declare const WS_TILEDWINDOW: number;
declare const WS_EX_ACCEPTFILES = 16;
declare const WS_EX_APPWINDOW = 262144;
declare const WS_EX_CLIENTEDGE = 512;
declare const WS_EX_COMPOSITED = 33554432;
declare const WS_EX_CONTEXTHELP = 1024;
declare const WS_EX_CONTROLPARENT = 65536;
declare const WS_EX_DLGMODALFRAME = 1;
declare const WS_EX_LAYERED = 524288;
declare const WS_EX_LAYOUTRTL = 4194304;
declare const WS_EX_LEFT = 0;
declare const WS_EX_LEFTSCROLLBAR = 16384;
declare const WS_EX_LTRREADING = 0;
declare const WS_EX_MDICHILD = 64;
declare const WS_EX_NOACTIVATE = 134217728;
declare const WS_EX_NOINHERITLAYOUT = 1048576;
declare const WS_EX_NOPARENTNOTIFY = 4;
declare const WS_EX_NOREDIRECTIONBITMAP = 2097152;
declare const WS_EX_RIGHT = 4096;
declare const WS_EX_RIGHTSCROLLBAR = 0;
declare const WS_EX_RTLREADING = 8192;
declare const WS_EX_STATICEDGE = 131072;
declare const WS_EX_TOOLWINDOW = 128;
declare const WS_EX_TOPMOST = 8;
declare const WS_EX_TRANSPARENT = 32;
declare const WS_EX_WINDOWEDGE = 256;
declare const WS_EX_OVERLAPPEDWINDOW: number;
declare const WS_EX_PALETTEWINDOW: number;
declare const PM_NOREMOVE = 0;
declare const PM_REMOVE = 1;
declare const PM_NOYIELD = 2;
declare const CW_USEDEFAULT: number;

declare const constants_CW_USEDEFAULT: typeof CW_USEDEFAULT;
type constants_CmdSetPos = CmdSetPos;
declare const constants_CmdSetPos: typeof CmdSetPos;
type constants_CmdShow = CmdShow;
declare const constants_CmdShow: typeof CmdShow;
declare const constants_PM_NOREMOVE: typeof PM_NOREMOVE;
declare const constants_PM_NOYIELD: typeof PM_NOYIELD;
declare const constants_PM_REMOVE: typeof PM_REMOVE;
declare const constants_WS_BORDER: typeof WS_BORDER;
declare const constants_WS_CAPTION: typeof WS_CAPTION;
declare const constants_WS_CHILD: typeof WS_CHILD;
declare const constants_WS_CLIPCHILDREN: typeof WS_CLIPCHILDREN;
declare const constants_WS_CLIPSIBLINGS: typeof WS_CLIPSIBLINGS;
declare const constants_WS_DISABLED: typeof WS_DISABLED;
declare const constants_WS_DLGFRAME: typeof WS_DLGFRAME;
declare const constants_WS_EX_ACCEPTFILES: typeof WS_EX_ACCEPTFILES;
declare const constants_WS_EX_APPWINDOW: typeof WS_EX_APPWINDOW;
declare const constants_WS_EX_CLIENTEDGE: typeof WS_EX_CLIENTEDGE;
declare const constants_WS_EX_COMPOSITED: typeof WS_EX_COMPOSITED;
declare const constants_WS_EX_CONTEXTHELP: typeof WS_EX_CONTEXTHELP;
declare const constants_WS_EX_CONTROLPARENT: typeof WS_EX_CONTROLPARENT;
declare const constants_WS_EX_DLGMODALFRAME: typeof WS_EX_DLGMODALFRAME;
declare const constants_WS_EX_LAYERED: typeof WS_EX_LAYERED;
declare const constants_WS_EX_LAYOUTRTL: typeof WS_EX_LAYOUTRTL;
declare const constants_WS_EX_LEFT: typeof WS_EX_LEFT;
declare const constants_WS_EX_LEFTSCROLLBAR: typeof WS_EX_LEFTSCROLLBAR;
declare const constants_WS_EX_LTRREADING: typeof WS_EX_LTRREADING;
declare const constants_WS_EX_MDICHILD: typeof WS_EX_MDICHILD;
declare const constants_WS_EX_NOACTIVATE: typeof WS_EX_NOACTIVATE;
declare const constants_WS_EX_NOINHERITLAYOUT: typeof WS_EX_NOINHERITLAYOUT;
declare const constants_WS_EX_NOPARENTNOTIFY: typeof WS_EX_NOPARENTNOTIFY;
declare const constants_WS_EX_NOREDIRECTIONBITMAP: typeof WS_EX_NOREDIRECTIONBITMAP;
declare const constants_WS_EX_OVERLAPPEDWINDOW: typeof WS_EX_OVERLAPPEDWINDOW;
declare const constants_WS_EX_PALETTEWINDOW: typeof WS_EX_PALETTEWINDOW;
declare const constants_WS_EX_RIGHT: typeof WS_EX_RIGHT;
declare const constants_WS_EX_RIGHTSCROLLBAR: typeof WS_EX_RIGHTSCROLLBAR;
declare const constants_WS_EX_RTLREADING: typeof WS_EX_RTLREADING;
declare const constants_WS_EX_STATICEDGE: typeof WS_EX_STATICEDGE;
declare const constants_WS_EX_TOOLWINDOW: typeof WS_EX_TOOLWINDOW;
declare const constants_WS_EX_TOPMOST: typeof WS_EX_TOPMOST;
declare const constants_WS_EX_TRANSPARENT: typeof WS_EX_TRANSPARENT;
declare const constants_WS_EX_WINDOWEDGE: typeof WS_EX_WINDOWEDGE;
declare const constants_WS_GROUP: typeof WS_GROUP;
declare const constants_WS_HSCROLL: typeof WS_HSCROLL;
declare const constants_WS_ICONIC: typeof WS_ICONIC;
declare const constants_WS_MAXIMIZE: typeof WS_MAXIMIZE;
declare const constants_WS_MAXIMIZEBOX: typeof WS_MAXIMIZEBOX;
declare const constants_WS_MINIMIZE: typeof WS_MINIMIZE;
declare const constants_WS_MINIMIZEBOX: typeof WS_MINIMIZEBOX;
declare const constants_WS_OVERLAPPED: typeof WS_OVERLAPPED;
declare const constants_WS_OVERLAPPEDWINDOW: typeof WS_OVERLAPPEDWINDOW;
declare const constants_WS_POPUP: typeof WS_POPUP;
declare const constants_WS_POPUPWINDOW: typeof WS_POPUPWINDOW;
declare const constants_WS_SIZEBOX: typeof WS_SIZEBOX;
declare const constants_WS_SYSMENU: typeof WS_SYSMENU;
declare const constants_WS_TABSTOP: typeof WS_TABSTOP;
declare const constants_WS_THICKFRAME: typeof WS_THICKFRAME;
declare const constants_WS_TILED: typeof WS_TILED;
declare const constants_WS_TILEDWINDOW: typeof WS_TILEDWINDOW;
declare const constants_WS_VISIBLE: typeof WS_VISIBLE;
declare const constants_WS_VSCROLL: typeof WS_VSCROLL;
declare namespace constants {
  export {
    constants_CW_USEDEFAULT as CW_USEDEFAULT,
    constants_CmdSetPos as CmdSetPos,
    constants_CmdShow as CmdShow,
    constants_PM_NOREMOVE as PM_NOREMOVE,
    constants_PM_NOYIELD as PM_NOYIELD,
    constants_PM_REMOVE as PM_REMOVE,
    constants_WS_BORDER as WS_BORDER,
    constants_WS_CAPTION as WS_CAPTION,
    constants_WS_CHILD as WS_CHILD,
    constants_WS_CLIPCHILDREN as WS_CLIPCHILDREN,
    constants_WS_CLIPSIBLINGS as WS_CLIPSIBLINGS,
    constants_WS_DISABLED as WS_DISABLED,
    constants_WS_DLGFRAME as WS_DLGFRAME,
    constants_WS_EX_ACCEPTFILES as WS_EX_ACCEPTFILES,
    constants_WS_EX_APPWINDOW as WS_EX_APPWINDOW,
    constants_WS_EX_CLIENTEDGE as WS_EX_CLIENTEDGE,
    constants_WS_EX_COMPOSITED as WS_EX_COMPOSITED,
    constants_WS_EX_CONTEXTHELP as WS_EX_CONTEXTHELP,
    constants_WS_EX_CONTROLPARENT as WS_EX_CONTROLPARENT,
    constants_WS_EX_DLGMODALFRAME as WS_EX_DLGMODALFRAME,
    constants_WS_EX_LAYERED as WS_EX_LAYERED,
    constants_WS_EX_LAYOUTRTL as WS_EX_LAYOUTRTL,
    constants_WS_EX_LEFT as WS_EX_LEFT,
    constants_WS_EX_LEFTSCROLLBAR as WS_EX_LEFTSCROLLBAR,
    constants_WS_EX_LTRREADING as WS_EX_LTRREADING,
    constants_WS_EX_MDICHILD as WS_EX_MDICHILD,
    constants_WS_EX_NOACTIVATE as WS_EX_NOACTIVATE,
    constants_WS_EX_NOINHERITLAYOUT as WS_EX_NOINHERITLAYOUT,
    constants_WS_EX_NOPARENTNOTIFY as WS_EX_NOPARENTNOTIFY,
    constants_WS_EX_NOREDIRECTIONBITMAP as WS_EX_NOREDIRECTIONBITMAP,
    constants_WS_EX_OVERLAPPEDWINDOW as WS_EX_OVERLAPPEDWINDOW,
    constants_WS_EX_PALETTEWINDOW as WS_EX_PALETTEWINDOW,
    constants_WS_EX_RIGHT as WS_EX_RIGHT,
    constants_WS_EX_RIGHTSCROLLBAR as WS_EX_RIGHTSCROLLBAR,
    constants_WS_EX_RTLREADING as WS_EX_RTLREADING,
    constants_WS_EX_STATICEDGE as WS_EX_STATICEDGE,
    constants_WS_EX_TOOLWINDOW as WS_EX_TOOLWINDOW,
    constants_WS_EX_TOPMOST as WS_EX_TOPMOST,
    constants_WS_EX_TRANSPARENT as WS_EX_TRANSPARENT,
    constants_WS_EX_WINDOWEDGE as WS_EX_WINDOWEDGE,
    constants_WS_GROUP as WS_GROUP,
    constants_WS_HSCROLL as WS_HSCROLL,
    constants_WS_ICONIC as WS_ICONIC,
    constants_WS_MAXIMIZE as WS_MAXIMIZE,
    constants_WS_MAXIMIZEBOX as WS_MAXIMIZEBOX,
    constants_WS_MINIMIZE as WS_MINIMIZE,
    constants_WS_MINIMIZEBOX as WS_MINIMIZEBOX,
    constants_WS_OVERLAPPED as WS_OVERLAPPED,
    constants_WS_OVERLAPPEDWINDOW as WS_OVERLAPPEDWINDOW,
    constants_WS_POPUP as WS_POPUP,
    constants_WS_POPUPWINDOW as WS_POPUPWINDOW,
    constants_WS_SIZEBOX as WS_SIZEBOX,
    constants_WS_SYSMENU as WS_SYSMENU,
    constants_WS_TABSTOP as WS_TABSTOP,
    constants_WS_THICKFRAME as WS_THICKFRAME,
    constants_WS_TILED as WS_TILED,
    constants_WS_TILEDWINDOW as WS_TILEDWINDOW,
    constants_WS_VISIBLE as WS_VISIBLE,
    constants_WS_VSCROLL as WS_VSCROLL,
  };
}

declare const dllName$1 = DllNames.user32;
declare const load$1: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns$1>;

declare const index_promise$1_constants: typeof constants;
declare namespace index_promise$1 {
  export {
    Win32Fns$1 as Win32Fns,
    apiDef$1 as apiDef,
    index_promise$1_constants as constants,
    dllName$1 as dllName,
    load$1 as load,
  };
}

interface Win32Fns {
    /**
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/closeprinter
     */
    ClosePrinter: (hPrinter: M.HANDLE) => M.BOOL;
    /**
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/enddocprinter
     */
    EndDocPrinter: (hPrinter: M.HANDLE) => M.BOOL;
    EndPagePrinter: (hPrinter: M.HANDLE) => M.BOOL;
    /**
     * Enumerates available printers, print servers, domains, or print providers.
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/enumprinters
     */
    EnumPrintersW: (Flags: M.DWORD, Name: M.LPTSTR, Level: M.DWORD, pPrinterEnum: M.LPBYTE, cbBuf: M.DWORD, pcbNeeded: M.LPDWORD, pcReturned: M.LPDWORD) => M.BOOL;
    /**
     * Enumerates the print processors installed on the specified server.
     * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/enumprintprocessors
     */
    EnumPrintProcessorsW: (pName: M.LPTSTR, pEnvironment: M.LPTSTR, Level: M.DWORD, pPrintProcessorInfo: M.LPBYTE, cbBuf: M.DWORD, pcbNeeded: M.LPDWORD, pcReturned: M.LPDWORD) => M.BOOL;
    /**
     * Enumerates the data types that a specified print processor supports.
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/enumprintprocessordatatypes
     */
    EnumPrintProcessorDatatypesW: (pName: M.LPTSTR, pPrintProcessorName: M.LPTSTR, Level: M.DWORD, pDatatypes: M.LPBYTE, cbBuf: M.DWORD, pcbNeeded: M.LPDWORD, pcReturned: M.LPDWORD) => M.BOOL;
    /**
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getdefaultprinter
     */
    GetDefaultPrinterW: (pszBuffer: M.LPTSTR, pcchBuffer: M.LPDWORD) => M.BOOL;
    /**
     * Retrieves information about a specified print job
     * @docs https://learn.microsoft.com/en-us/windows/win32/printdocs/getjob
     */
    GetJobW: (Handler: M.HANDLE, JobId: M.DWORD, Level: M.DWORD, pJob: M.LPBYTE, cbBuf: M.DWORD, pcbNeeded: M.LPDWORD) => M.BOOL;
    /**
     * Retrieves information about a specified printer.
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getprinter
     * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/getprinter
     */
    GetPrinterW: (hPrinter: M.HANDLE, Level: M.DWORD, pPrinter: M.LPBYTE, cbBuf: M.DWORD, pcbNeeded: M.LPDWORD) => M.BOOL;
    /**
     * Retrieves a handle to the specified printer or print server or other types of handles in the print subsystem.
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/openprinter
     * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/openprinter
     */
    OpenPrinterW: (pPrinterName: M.LPTSTR, phPrinter: M.LPHANDLE, pDefault: M.LPPRINTER_DEFAULTS) => M.BOOL;
    /**
     * Notifies the print spooler that a document is to be spooled for printing.
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/startdocprinter
     */
    StartDocPrinterW: (hPrinter: M.HANDLE, Level: M.DWORD, pDocInfo: M.LPBYTE) => M.DWORD;
    /**
     * Notifies the spooler that a page is about to be printed on the specified printer.
     * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/startpageprinter
     */
    StartPagePrinter: (hPrinter: M.HANDLE) => M.BOOL;
    /**
     *
     * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/writeprinter
     */
    WritePrinter: (hPrinter: M.HANDLE, pBuf: M.LPVOID, cbBuf: M.DWORD, pcWritten: M.LPDWORD) => M.BOOL;
}
declare const apiDef: M.DllFuncs<Win32Fns>;

declare const dllName = DllNames.winspool;
declare const load: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns>;

type index_promise_Win32Fns = Win32Fns;
declare const index_promise_apiDef: typeof apiDef;
declare const index_promise_dllName: typeof dllName;
declare const index_promise_load: typeof load;
declare namespace index_promise {
  export {
    index_promise_Win32Fns as Win32Fns,
    index_promise_apiDef as apiDef,
    index_promise_dllName as dllName,
    index_promise_load as load,
  };
}

export { index_promise$6 as Comctl32, index_promise$5 as Gdi32, index_promise$4 as Kernel32, index_promise$3 as Ntdll, index_promise$2 as Spoolss, index_promise$1 as User32, index_promise as Winspool };
