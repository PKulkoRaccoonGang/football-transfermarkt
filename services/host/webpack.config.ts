import path from 'path';
import webpack from 'webpack';

import {BuildMode, BuildPaths, BuildPlatform, buildWebpack} from '@packages/build-config'
import packageJson from './package.json'

interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
    PLAYER_REMOTE_URL?: string;
    CLUBS_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }
    const PLAYER_REMOTE_URL = env.PLAYER_REMOTE_URL ?? 'http://localhost:3001';
    const CLUBS_REMOTE_URL = env.CLUBS_REMOTE_URL ?? 'http://localhost:3003';

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',

        remotes: {
            player: `player@${PLAYER_REMOTE_URL}/remoteEntry.js`,
            clubs: `clubs@${CLUBS_REMOTE_URL}/remoteEntry.js`,
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
            },
            'react-router-dom': {
                eager: true,
            },
            'react-dom': {
                eager: true,
            },
        },
    }))

    return config;
}

