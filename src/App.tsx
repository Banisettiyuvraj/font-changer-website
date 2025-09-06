import React, { useState, useMemo } from 'react';
import { Search, Filter, Heart } from 'lucide-react';
import { FONTS } from './data/fonts';
import { FontCard } from './components/FontCard';
import { FontPreview } from './components/FontPreview';
import { FontControls } from './components/FontControls';
import { useFontSettings } from './hooks/useFontSettings';
import { filterFonts, sortFontsByPopularity, debounce } from './utils';
import { FontCategory, FontFilter } from './types/font';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FontCategory | 'all'>('all');
  const [showWebSafeOnly, setShowWebSafeOnly] = useState(false);
  const [showGoogleFontsOnly, setShowGoogleFontsOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const {
    settings,
    selectedFont,
    previewText,
    updateSetting,
    resetSettings,
    selectFont,
    setPreviewText
  } = useFontSettings();

  // Debounced search to improve performance
  const debouncedSearch = useMemo(
    () => debounce((query: string) => setSearchQuery(query), 300),
    []
  );

  const filteredFonts = useMemo(() => {
    const filter: FontFilter = {
      search: searchQuery,
      category: selectedCategory === 'all' ? undefined : selectedCategory,
      websafeOnly: showWebSafeOnly,
      googleFontsOnly: showGoogleFontsOnly
    };
    
    const filtered = filterFonts(FONTS, filter);
    return sortFontsByPopularity(filtered);
  }, [searchQuery, selectedCategory, showWebSafeOnly, showGoogleFontsOnly]);

  const categories: Array<{ value: FontCategory | 'all', label: string }> = [
    { value: 'all', label: 'All Fonts' },
    { value: 'sans-serif', label: 'Sans Serif' },
    { value: 'serif', label: 'Serif' },
    { value: 'display', label: 'Display' },
    { value: 'handwriting', label: 'Handwriting' },
    { value: 'monospace', label: 'Monospace' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Font Changer</h1>
                <p className="text-sm text-gray-600">Discover perfect typography</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
              <span>{filteredFonts.length} fonts available</span>
              <span>•</span>
              <span>Google Fonts & Web Safe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Font List */}
          <div className="lg:col-span-4">
            {/* Search and Filters */}
            <div className="space-y-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search fonts..."
                  className="search-input pl-10"
                  onChange={(e) => debouncedSearch(e.target.value)}
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-secondary flex items-center gap-2 w-full justify-center"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>

              {/* Filters */}
              {showFilters && (
                <div className="control-panel space-y-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value as FontCategory | 'all')}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Source Filters */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Font Source
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={showWebSafeOnly}
                          onChange={(e) => setShowWebSafeOnly(e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Web Safe Only</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={showGoogleFontsOnly}
                          onChange={(e) => setShowGoogleFontsOnly(e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Google Fonts Only</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Font List */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {filteredFonts.map((font) => (
                <FontCard
                  key={font.name}
                  font={font}
                  isSelected={selectedFont?.name === font.name}
                  onClick={selectFont}
                  previewText="Aa Bb Cc"
                  size={16}
                />
              ))}
              
              {filteredFonts.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No fonts match your search criteria</p>
                </div>
              )}
            </div>
          </div>

          {/* Center - Font Preview */}
          <div className="lg:col-span-5">
            <FontPreview
              selectedFont={selectedFont}
              settings={settings}
              previewText={previewText}
              onPreviewTextChange={setPreviewText}
            />
          </div>

          {/* Right Sidebar - Font Controls */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <FontControls
                selectedFont={selectedFont}
                settings={settings}
                updateSetting={updateSetting}
                resetSettings={resetSettings}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">Font Changer - Discover Perfect Typography</p>
            <p className="text-sm">
              Featuring {FONTS.length} fonts including Google Fonts and web-safe typefaces
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
