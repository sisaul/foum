"use client"

// Placeholder type for Sanity Portable Text - replace with actual type
// import { PortableTextBlock } from '@portabletext/types'; // Example
type PortableTextContent = object[]; // Use object[] as a slightly better placeholder than 'any'

// Export the interface
export interface TextSectionProps {
  // Use the specific type
  content?: PortableTextContent;
  // Example: Simple text content + alignment options
  text?: string;
  align?: 'left' | 'center' | 'right';
  maxWidth?: string; // e.g., 'max-w-4xl'
  paddingY?: string; // Add prop for vertical padding
  width?: string; // Add prop for explicit width - Keep for general cases
  layoutVariant?: 'default' | 'studioIntro' | 'titleText'; // Add layout variant prop
}

export default function TextSection({ 
  content, 
  text, 
  align = 'center', 
  maxWidth = 'max-w-none',
  paddingY = 'py-8 md:py-16',
  width = 'w-full md:w-3/5',
  layoutVariant = 'default'
}: TextSectionProps) {
  // Remove mx-auto when align is left or right
  const alignmentClass = 
    align === 'left' ? 'text-left' : 
    align === 'right' ? 'text-right' : 
    'text-center mx-auto';

  // Determine width class based on variant or explicit prop
  const widthClass = 
    layoutVariant === 'studioIntro' ? 'w-full md:w-2/3' :
    layoutVariant === 'titleText' ? 'w-full md:w-4/5' :
    width;

  // Prioritize rich content if available, otherwise use simple text
  const renderContent = () => {
    if (content) {
      // Example: Replace with actual PortableText component
      // import { PortableText } from '@portabletext/react' 
      // return <PortableText value={content} /> 
      return <div className="prose prose-invert dark:prose-invert lg:prose-xl">[Portable Text Content]</div>;
    } else if (text) {
      return (
        <p className="body whitespace-pre-line">
          {text}
        </p>
      );
    }
    return null;
  };

  return (
    // Use standard section spacing class instead of explicit padding
    <section className={`${paddingY}`}>
      {/* Apply alignment, width (now widthClass), and maxWidth classes */}
      <div className={`${alignmentClass} ${widthClass} ${maxWidth} px-0`}>
        {renderContent()}
      </div>
    </section>
  );
}

