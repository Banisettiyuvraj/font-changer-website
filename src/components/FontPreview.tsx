import React from 'react';
import { Font, FontSettings } from '../types/font';
import { generateFontStyles } from '../utils';
import { Type, Edit3 } from 'lucide-react';

interface FontPreviewProps {
  selectedFont: Font | null;
  settings: FontSettings;
  previewText: string;
  onPreviewTextChange: (text: string) => void;
}

export function FontPreview({ selectedFont, settings, previewText, onPreviewTextChange }: FontPreviewProps) {
  if (!selectedFont) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="text-center py-16">
          <Type className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No Font Selected</h3>
          <p className="text-gray-500">Choose a font from the list to see the preview</p>
        </div>
      </div>
    );
  }

  const fontStyles = generateFontStyles(
    selectedFont,
    settings.size,
    settings.weight,
    settings.style,
    settings.lineHeight,
    settings.letterSpacing,
    settings.color
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Type className="w-5 h-5 text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{selectedFont.name}</h3>
              <p className="text-sm text-gray-500 capitalize">{selectedFont.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{settings.size}px</span>
            <span>•</span>
            <span>{settings.weight}</span>
            <span>•</span>
            <span className="capitalize">{settings.style}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Edit3 className="w-4 h-4" />
            Preview Text
          </label>
          <textarea
            value={previewText}
            onChange={(e) => onPreviewTextChange(e.target.value)}
            placeholder="Enter your text to preview..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={2}
          />
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50/50">
          <div
            style={fontStyles}
            className="min-h-[120px] leading-relaxed"
          >
            {previewText || 'Enter some text to preview this font...'}
          </div>
        </div>

        {/* Font Information */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Font Information</h4>
          <p className="text-sm text-blue-800 mb-3">{selectedFont.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-blue-600 font-medium">Popularity</div>
              <div className="text-blue-800">{selectedFont.popularity}%</div>
            </div>
            <div>
              <div className="text-blue-600 font-medium">Category</div>
              <div className="text-blue-800 capitalize">{selectedFont.category}</div>
            </div>
            <div>
              <div className="text-blue-600 font-medium">Source</div>
              <div className="text-blue-800">
                {selectedFont.googleFont ? 'Google Fonts' : selectedFont.websafe ? 'Web Safe' : 'System'}
              </div>
            </div>
            <div>
              <div className="text-blue-600 font-medium">Weights</div>
              <div className="text-blue-800">{selectedFont.weights.length} available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
