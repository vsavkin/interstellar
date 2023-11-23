import {nxE2EPreset} from '@nx/cypress/plugins/cypress-preset';
import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4204',
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {default: 'nx run ticket-booking:serve'},
      ciWebServerCommand: 'nx run ticket-booking:serve-static'
    })
  },
});
