export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  public: string;
  src: string;
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
  output?: {
    publicPath: string;
  };
}

export interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  PLAYER_REMOTE_URL?: string;
  CLUBS_REMOTE_URL?: string;
  AUTHN_REMOTE_URL?: string;
}

export interface RemoteConfig {
  [key: string]: string;
}

export interface SharedDependency {
  singleton: boolean;
  eager?: boolean;
  requiredVersion: string;
}

export interface SharedConfig {
  [key: string]: SharedDependency;
}
