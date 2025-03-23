import path from 'node:path';
import webpack from 'webpack';

import { type BuildMode, type BuildPaths, buildWebpack } from '@packages/build-config';
import packageJson from './package.json';

interface EnvVariables {
	mode?: BuildMode;
	analyzer?: boolean;
	port?: number;
	PLAYER_REMOTE_URL?: string;
	CLUBS_REMOTE_URL?: string;
	AUTHN_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		src: path.resolve(__dirname, 'src'),
	};
	const PLAYER_REMOTE_URL = env.PLAYER_REMOTE_URL ?? 'http://localhost:3001';
	const CLUBS_REMOTE_URL = env.CLUBS_REMOTE_URL ?? 'http://localhost:3002';
	const AUTHN_REMOTE_URL = env.AUTHN_REMOTE_URL ?? 'http://localhost:3003';

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths,
		analyzer: env.analyzer,
		output: {
			publicPath: 'auto',
		}
	});

	config.plugins.push(
		new webpack.container.ModuleFederationPlugin({
			name: 'host',
			filename: 'remoteEntry.js',
			remotes: {
				player: `player@${PLAYER_REMOTE_URL}/remoteEntry.js`,
				clubs: `clubs@${CLUBS_REMOTE_URL}/remoteEntry.js`,
				authn: `authn@${AUTHN_REMOTE_URL}/remoteEntry.js`,
			},
			shared: {
				...packageJson.dependencies,
				react: {
					singleton: true,
					eager: true,
					requiredVersion: packageJson.dependencies.react
				},
				'react-router-dom': {
					singleton: true,
					eager: true,
					requiredVersion: packageJson.dependencies['react-router-dom']
				},
				'react-dom': {
					singleton: true,
					eager: true,
					requiredVersion: packageJson.dependencies['react-dom']
				}
			},
		}),
	);

	return config;
};
