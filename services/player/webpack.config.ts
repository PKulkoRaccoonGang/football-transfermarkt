import path from 'node:path';
import webpack from 'webpack';

import { type BuildMode, type BuildPaths, buildWebpack } from '@packages/build-config';

import packageJson from './package.json';

interface EnvVariables {
	mode?: BuildMode;
	analyzer?: boolean;
	port?: number;
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		src: path.resolve(__dirname, 'src'),
	};

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3001,
		mode: env.mode ?? 'development',
		paths,
		analyzer: env.analyzer,
	});

	config.plugins.push(
		new webpack.container.ModuleFederationPlugin({
			name: 'player',
			filename: 'remoteEntry.js',
			exposes: {
				'./Router': './src/Router.tsx',
			},
			shared: {
				...packageJson.dependencies,
				react: {
					singleton: true,
					eager: true,
					requiredVersion: packageJson.dependencies.react,
				},
				'react-router-dom': {
					singleton: true,
					eager: true,
					requiredVersion: packageJson.dependencies['react-router-dom'],
				},
				'react-dom': {
					singleton: true,
					eager: true,
					requiredVersion: packageJson.dependencies['react-dom'],
				},
				'@tanstack/react-query': {
					singleton: true,
					requiredVersion: packageJson.dependencies['@tanstack/react-query'],
				},
				zustand: {
					singleton: true,
					requiredVersion: packageJson.dependencies.zustand,
				},
				'react-bootstrap': {
					singleton: true,
					requiredVersion: packageJson.dependencies['react-bootstrap'],
				},
				'react-helmet': {
					singleton: true,
					requiredVersion: packageJson.dependencies['react-helmet'],
				},
				'@packages/shared': {
					singleton: true,
					requiredVersion: packageJson.dependencies['@packages/shared'],
				},
				axios: {
					singleton: true,
					requiredVersion: packageJson.dependencies.axios,
				},
				'chart.js': {
					singleton: true,
					requiredVersion: packageJson.dependencies['chart.js'],
				},
				'react-chartjs-2': {
					singleton: true,
					requiredVersion: packageJson.dependencies['react-chartjs-2'],
				},
			},
		}),
	);

	return config;
};
