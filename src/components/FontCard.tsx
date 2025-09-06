import React from 'react';
import { Font } from '../types/font';
import { generateFontStyles, cn } from '../utils';

interface FontCardProps {
  font: Font;
  isSelected?: boolean;
  onClick: (font: Font) => void;
  previewText: string;
  size: number;
}

export function FontCard({ font, isSelected, onClick, previewText, size }: FontCardProps) {
  const fontStyles = generateFontStyles(font, size);

  return (
    <div
      className={cn('font-card', isSelected && 'selected')}
      onClick={() => onClick(font)}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{font.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-500 capitalize">{font.category}</span>
            {font.googleFont && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                Google
              </span>
            )}
            {font.websafe && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                Web Safe
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-600">
            {font.popularity}%
          </div>
          <div className="text-xs text-gray-400">popularity</div>
        </div>
      </div>
      
      <div
        className="font-preview-text mb-3"
        style={fontStyles}
      >
        {previewText}
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {font.description}
      </p>
      
      <div className="flex flex-wrap gap-1 text-xs text-gray-500">
        <span>Weights:</span>
        {font.weights.map(weight => (
          <span key={weight} className="bg-gray-100 px-1.5 py-0.5 rounded">
            {weight}
          </span>
        ))}
      </div>
    </div>
  );
}
