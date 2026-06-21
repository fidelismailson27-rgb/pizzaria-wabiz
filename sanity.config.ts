import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './sanity/schemas';

export default defineConfig({
  name: 'pizzaria-wabiz',
  title: 'Pizzaria Premium',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
