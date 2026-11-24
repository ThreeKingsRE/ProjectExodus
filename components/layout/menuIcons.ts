import type { ComponentType } from 'react'
import { Home, ShoppingBag, Newspaper, Hammer, CalendarDays, MessagesSquare, Rocket, Fish, Sprout, GraduationCap, Landmark, Ruler, MessageCircle, Bell, Compass, Search, Settings } from 'lucide-react'

/** Icon names used by lib/menu/layout.ts */
export const MENU_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Home, ShoppingBag, Newspaper, Hammer, CalendarDays, MessagesSquare, Rocket, Fish, Sprout, GraduationCap, Landmark, Ruler, MessageCircle, Bell, Compass, Search, Settings,
}
