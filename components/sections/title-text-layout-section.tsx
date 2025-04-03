'use client'

import TextSection from './text-section';
import TitleSection from './title-section';

export interface TitleTextLayoutSectionProps {
  title: string;
  titleSize?: 'small' | 'medium' | 'large';
  text: string;
  textAlign?: 'left' | 'center' | 'right';
  textMaxWidth?: string;
  titlePosition?: 'left' | 'right';
  verticalAlign?: 'start' | 'center' | 'end';
}

export default function TitleTextLayoutSection({
  title,
  titleSize = 'small',
  text,
  textAlign = 'left',
  textMaxWidth,
  titlePosition = 'left',
  verticalAlign = 'start',
}: TitleTextLayoutSectionProps) {
  const alignmentClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }[verticalAlign];

  return (
    // Remove padding from the section itself, rely on parent
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${alignmentClass}`}>
      {/* Title Area */}
      <div className={`${titlePosition === 'left' ? 'order-1' : 'order-2'}`}>
        <TitleSection 
          title={title} 
          size={titleSize} 
          centered={false} // Titles likely shouldn't be centered in this layout
          // Remove internal padding from TitleSection if it adds too much space
        />
      </div>

      {/* Text Area */}
      <div className={`${titlePosition === 'left' ? 'order-2' : 'order-1'}`}>
        <TextSection
          text={text}
          align={textAlign}
          maxWidth={textMaxWidth}
          paddingY="py-0" // Remove internal padding from TextSection
        />
      </div>
    </div>
  );
} 