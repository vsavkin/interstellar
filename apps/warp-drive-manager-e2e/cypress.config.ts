import {nxE2EPreset} from '@nx/cypress/plugins/cypress-preset';
import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4205',
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {default: 'nx run warp-drive-manager:serve'},
      ciWebServerCommand: 'nx run warp-drive-manager:serve-static'
    })
  },
});
