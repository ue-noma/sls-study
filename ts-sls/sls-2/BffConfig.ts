export interface BffConfig {
  retachConfig: retatchConfig;
}

export interface retatchConfig {
  name: string;
}

declare const  SERVICE_NAME: retatchConfig["name"];

// esbuild.define により、SERVICE_NAME はビルド時に直接埋め込まれる
export default {
  retachConfig: {
    name: SERVICE_NAME,
  },
} as BffConfig;
