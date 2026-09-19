import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.click2nurti.app',
    appName: 'Click@Nutri',
    webDir: 'dist',
    server: {
        androidScheme: 'https',
        allowNavigation: ['generativelanguage.googleapis.com']
    },
    plugins: {
        CapacitorHttp: {
            enabled: true,
        },
    },
};

export default config;
