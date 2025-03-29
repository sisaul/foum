import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

const builder = imageUrlBuilder(client);

// Using SanityImageSource type or a more specific type if available
export function urlFor(source: object) {
  return builder.image(source);
} 