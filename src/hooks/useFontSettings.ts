import { useState, useCallback } from 'react';
import { Font, FontSettings } from '../types/font';

export function useFontSettings(initialFont?: Font) {
  const [settings, setSettings] = useState<FontSettings>({
    size: 18,
    weight: 400,
    style: 'normal',
    lineHeight: 1.5,
    letterSpacing: 0,
    color: '#333333'
  });

  const [selectedFont, setSelectedFont] = useState<Font | null>(initialFont || null);
  const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog');

  const updateSetting = useCallback(<K extends keyof FontSettings>(
    key: K,
    value: FontSettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings({
      size: 18,
      weight: 400,
      style: 'normal',
      lineHeight: 1.5,
      letterSpacing: 0,
      color: '#333333'
    });
  }, []);

  const selectFont = useCallback((font: Font) => {
    setSelectedFont(font);
    // Adjust weight if the selected font doesn't support the current weight
    if (!font.weights.includes(settings.weight)) {
      const closestWeight = font.weights.reduce((prev, curr) =>
        Math.abs(curr - settings.weight) < Math.abs(prev - settings.weight) ? curr : prev
      );
      updateSetting('weight', closestWeight);
    }
    // Adjust style if the selected font doesn't support the current style
    if (!font.styles.includes(settings.style)) {
      updateSetting('style', 'normal');
    }
  }, [settings.weight, settings.style, updateSetting]);

  return {
    settings,
    selectedFont,
    previewText,
    updateSetting,
    resetSettings,
    selectFont,
    setPreviewText
  };
}
