import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemas } from './sanity/schemas';

export default defineConfig({
  name: 'pizzaria-wabiz',
  title: 'Pizzaria Premium',
  basePath: '/studio',
  projectId: 'gnepwp1u',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemas,
  },
});
