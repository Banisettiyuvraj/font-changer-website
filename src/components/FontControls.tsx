import React from 'react';
import { Font, FontSettings } from '../types/font';
import { Sliders, Type, Palette, Copy, Download } from 'lucide-react';
import { generateCSS, copyToClipboard, downloadTextFile } from '../utils';

interface FontControlsProps {
  selectedFont: Font | null;
  settings: FontSettings;
  updateSetting: <K extends keyof FontSettings>(key: K, value: FontSettings[K]) => void;
  resetSettings: () => void;
}

export function FontControls({ selectedFont, settings, updateSetting, resetSettings }: FontControlsProps) {
  const handleCopyCSS = async () => {
    if (!selectedFont) return;
    const css = generateCSS(
      selectedFont,
      settings.size,
      settings.weight,
      settings.style,
      settings.lineHeight,
      settings.letterSpacing,
      settings.color
    );
    try {
      await copyToClipboard(css);
      // You could add a toast notification here
    } catch (error) {
      console.error('Failed to copy CSS:', error);
    }
  };

  const handleDownloadCSS = () => {
    if (!selectedFont) return;
    const css = generateCSS(
      selectedFont,
      settings.size,
      settings.weight,
      settings.style,
      settings.lineHeight,
      settings.letterSpacing,
      settings.color
    );
    downloadTextFile(css, `${selectedFont.name.toLowerCase().replace(/\s+/g, '-')}-font.css`);
  };

  if (!selectedFont) {
    return (
      <div className="control-panel">
        <div className="text-center py-8">
          <Type className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Select a font to customize its appearance</p>
        </div>
      </div>
    );
  }

  return (
    <div className="control-panel">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Font Controls</h3>
        </div>
        <button
          onClick={resetSettings}
          className="btn-secondary text-sm"
        >
          Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Font Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Size: {settings.size}px
          </label>
          <input
            type="range"
            min="8"
            max="72"
            value={settings.size}
            onChange={(e) => updateSetting('size', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Font Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Weight
          </label>
          <select
            value={settings.weight}
            onChange={(e) => updateSetting('weight', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {selectedFont.weights.map(weight => (
              <option key={weight} value={weight}>
                {weight} {weight === 400 ? '(Normal)' : weight === 700 ? '(Bold)' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Font Style */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Style
          </label>
          <select
            value={settings.style}
            onChange={(e) => updateSetting('style', e.target.value as 'normal' | 'italic')}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {selectedFont.styles.map(style => (
              <option key={style} value={style}>
                {style === 'normal' ? 'Normal' : 'Italic'}
              </option>
            ))}
          </select>
        </div>

        {/* Line Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Line Height: {settings.lineHeight}
          </label>
          <input
            type="range"
            min="0.8"
            max="3"
            step="0.1"
            value={settings.lineHeight}
            onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Letter Spacing */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Letter Spacing: {settings.letterSpacing}px
          </label>
          <input
            type="range"
            min="-2"
            max="5"
            step="0.1"
            value={settings.letterSpacing}
            onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Font Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={settings.color}
              onChange={(e) => updateSetting('color', e.target.value)}
              className="w-12 h-10 rounded border border-gray-200 cursor-pointer"
            />
            <input
              type="text"
              value={settings.color}
              onChange={(e) => updateSetting('color', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder="#000000"
            />
          </div>
        </div>

        {/* Export Options */}
        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Export</h4>
          <div className="flex gap-2">
            <button
              onClick={handleCopyCSS}
              className="btn-primary flex items-center gap-2 flex-1"
            >
              <Copy className="w-4 h-4" />
              Copy CSS
            </button>
            <button
              onClick={handleDownloadCSS}
              className="btn-secondary flex items-center gap-2 flex-1"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
