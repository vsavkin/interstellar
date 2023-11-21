import {nxE2EPreset} from '@nx/cypress/plugins/cypress-preset';
import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: nxE2EPreset(__filename, {
    cypressDir: 'src',
    devServerTargets: {default: 'crew:serve'},
    ciDevServerTarget: 'crew:serve-static'
  }),
});
