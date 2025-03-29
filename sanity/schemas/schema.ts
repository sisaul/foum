import { SchemaTypeDefinition } from 'sanity';
import product from './product';
import story from './story';
import project from './project';
import homepage from './homepage';
import category from './category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types
    product,
    story,
    project,
    homepage,
    
    // Other types
    category,
  ],
}; 