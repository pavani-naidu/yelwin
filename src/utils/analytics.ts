/**
 * YELWIN Analytics & Event Tracking Engine
 * Privacy-conscious event logger tracking user interactions across the application.
 */

export interface AnalyticsEvent {
  eventName: string;
  category: 'Navigation' | 'CTA' | 'Form' | 'CaseStudy' | 'Insight' | '3DInteraction' | 'Legal';
  label?: string;
  value?: number;
  timestamp: string;
  details?: Record<string, unknown>;
}

class YELWINAnalytics {
  private events: AnalyticsEvent[] = [];
  private isDebug = process.env.NODE_ENV !== 'production';

  public track(
    eventName: string,
    category: AnalyticsEvent['category'],
    label?: string,
    details?: Record<string, unknown>
  ): void {
    const event: AnalyticsEvent = {
      eventName,
      category,
      label,
      timestamp: new Date().toISOString(),
      details,
    };

    this.events.push(event);

    if (this.isDebug) {
      console.log(`[YELWIN Analytics] [${category}] ${eventName}`, { label, details });
    }

    // Custom browser dispatch event for analytics listeners
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('yelwin_analytics_event', { detail: event }));
    }
  }

  public getLoggedEvents(): AnalyticsEvent[] {
    return [...this.events];
  }
}

export const analytics = new YELWINAnalytics();
