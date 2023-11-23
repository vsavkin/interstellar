import {nxE2EPreset} from '@nx/cypress/plugins/cypress-preset';
import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4203',
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {default: 'nx run navigation:serve'},
      ciWebServerCommand: 'nx run navigation:serve-static'
    })
  },
});
