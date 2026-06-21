import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './sanity/schemas';

export default defineConfig({
  name: 'pizzaria-wabiz',
  title: 'Pizzaria Premium',
  projectId: 'gnepwp1u',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
