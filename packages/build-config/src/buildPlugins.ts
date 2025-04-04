import path from 'node:path';
import dotenv from 'dotenv';
import webpack, { type Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import type { BuildOptions } from './types/types';

dotenv.config();

export function buildPlugins({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] {
	const isDev = mode === 'development';
	const isProd = mode === 'production';

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: paths.html,
			favicon: path.resolve(paths.public, 'favicon.ico'),
			publicPath: '/',
		}),
		new DefinePlugin({
			__ENV__: JSON.stringify(mode),
		}),
		new DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
	];

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin());
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
		);
	}

	if (analyzer) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	return plugins;
}
