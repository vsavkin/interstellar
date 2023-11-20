import {nxE2EPreset} from '@nx/cypress/plugins/cypress-preset';
import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4202',
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {default: 'nx run flight-simulator:serve'},
      ciWebServerCommand: 'nx run flight-simulator:serve-static'
    })
  },
});
