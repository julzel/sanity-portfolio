import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: '33k99ch4',
  dataset: 'production',
  apiVersion: '2024-04-05',
  useCdn: false,
};

const client = createClient(config);

export default client;