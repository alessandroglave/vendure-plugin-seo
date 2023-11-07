import {
  createTestEnvironment,
  registerInitializer,
  SqljsInitializer,
  testConfig,
} from '@vendure/testing';
import {
  DefaultLogger,
  DefaultSearchPlugin,
  LogLevel,
  mergeConfig,
} from '@vendure/core';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import path from 'path';
import { SeoPlugin } from '../src';
import { initialData } from './initial-data';

require('dotenv').config();

(async () => {
  registerInitializer('sqljs', new SqljsInitializer('__data__'));
  const devConfig = mergeConfig(testConfig, {
    logger: new DefaultLogger({ level: LogLevel.Debug }),
    plugins: [
      AssetServerPlugin.init({
        assetUploadDir: path.join(__dirname, '__data__/assets'),
        route: 'assets',
    }),
      SeoPlugin,
      DefaultSearchPlugin,
      AdminUiPlugin.init({
        port: 3002,
        route: 'admin',
        /*      
        TODO: uncomment this block to start the admin ui in dev mode
        app: compileUiExtensions({
          outputPath: path.join(__dirname, "__admin-ui"),
          extensions: [
            // TODO Add your plugin's UI here
          ],
          devMode: true
        })*/
      }),
    ],
    apiOptions: {
      shopApiPlayground: true,
      adminApiPlayground: true,
    },
  });
  const { server, adminClient, shopClient } = createTestEnvironment(devConfig);
  await server.init({
    initialData,
    productsCsvPath: path.join(__dirname, './product-import.csv'),
  });
})();
