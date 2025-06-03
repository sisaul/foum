import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';

const builder = imageUrlBuilder(client);

// Using SanityImageSource type or a more specific type if available
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
} 