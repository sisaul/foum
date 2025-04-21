'use client'

import TextSection from './text-section';
import TitleSection from './title-section';

export interface TitleTextLayoutSectionProps {
  title: string;
  text: string;
  textAlign?: 'left' | 'center' | 'right';
  titlePosition?: 'left' | 'right';
  verticalAlign?: 'start' | 'center' | 'end';
  maxWidth?: string;
}

export default function TitleTextLayoutSection({
  title,
  text,
  textAlign = 'left',
  titlePosition = 'left',
  verticalAlign = 'start',
  maxWidth,
}: TitleTextLayoutSectionProps) {
  const alignmentClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }[verticalAlign];

  return (
    // Remove padding from the section itself, rely on parent
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${alignmentClass}`}>
      {/* Title Area */}
      <div className={`${titlePosition === 'left' ? 'order-1' : 'order-2'} mb-0 md:mb-0`}>
        <TitleSection 
          title={title} 
          centered={false}
          size="small"
          noPadding={true}
        />
      </div>

      {/* Text Area */}
      <div className={`${titlePosition === 'left' ? 'order-2' : 'order-1'}`}>
        <TextSection
          text={text}
          align={textAlign}
          maxWidth={maxWidth}
          paddingY="py-0" // Remove internal padding from TextSection
          layoutVariant="titleText"
        />
      </div>
    </div>
  );
} 