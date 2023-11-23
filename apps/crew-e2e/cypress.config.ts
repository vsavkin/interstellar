import {nxE2EPreset} from '@nx/cypress/plugins/cypress-preset';
import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4201',
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {default: 'nx run crew:serve'},
      ciWebServerCommand: 'nx run crew:serve-static'
    })
  },
});
