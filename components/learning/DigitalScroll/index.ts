// ============================================
// THE DIGITAL SCROLL
// Central Exports - Ancient manuscript meets digital revelation
// ============================================

// Main Component
export { DigitalScroll, default } from './DigitalScroll'

// Scroll Container & Structure
export {
  ScrollContainer,
  ScrollWrapper,
  PageContainer,
  ScrollSpine,
  PageEdges,
} from './ScrollContainer'

// Scroll Cover
export { ScrollCover, InsideCover } from './ScrollCover'

// Scroll Pages
export {
  ScrollPage,
  PageContent,
  VerseHeader,
  ChapterDivider,
} from './ScrollPage'

// Page Flip Animation
export {
  PageFlip,
  RapidPageFlip,
  usePageTurnSound,
} from './PageFlip'

// Ribbon Bookmarks
export { RibbonBookmarks } from './RibbonBookmarks'

// Opening Animation
export { ScrollOpenAnimation } from './ScrollOpenAnimation'

// Interactive Learning Games
export {
  MatchingGame,
  ScrollFlashcards,
  WordScramble,
  FillInBlank,
  ScrollGameSelector,
} from './ScrollGames'
// State Management
export { useScrollState, type UseScrollStateReturn } from './useScrollState'

// Context for header auto-hide
export { DigitalScrollProvider, useDigitalScrollContext } from './DigitalScrollContext'
export type { ReadingPosition, TopicProgress, ScrollUnlockState, ScrollPreferences, ScrollState } from './useScrollState'

// Constants
export {
  // Guardian Ribbons
  GUARDIAN_RIBBONS,
  RIBBON_ORDER,
  YIN_YANG_RIBBON,
  type GuardianRibbon,

  // Scroll Dimensions
  SCROLL_DIMENSIONS,

  // Animation Timings
  ANIMATION_TIMINGS,

  // Theme Colors
  SCROLL_THEME,
  SCROLL_CSS_VARS,

  // Perspective
  PERSPECTIVE_CONFIG,

  // Watermark
  WATERMARK_CONFIG,

  // Sound
  SOUND_CONFIG,

  // Accessibility
  A11Y_CONFIG,

  // Storage
  STORAGE_KEYS,

  // Topic Icons
  CORE_TOPIC_ICONS,

  // Helpers
  getRibbonForChapter,
  getChapterTitle,
  getDeviceType,
  getDimensions,
} from './scrollConstants'
