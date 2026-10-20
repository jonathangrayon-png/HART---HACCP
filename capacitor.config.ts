import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.harthaccp.app',
  appName: 'HART HACCP',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
