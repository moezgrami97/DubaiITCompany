// global.d.ts
declare global {
  interface Window {
    _waEmbed: (btnSetting: any, widgetSetting: any) => void;
  }
}

// This is required to make the file a module
export {};
