import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'portfolio_cms',
  title: 'Portfolio CMS',

  projectId: '33k99ch4',
  dataset: 'production',
  basePath: "/sanity-studio",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
