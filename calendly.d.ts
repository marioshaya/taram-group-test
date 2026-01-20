interface CalendlyInitInlineWidgetOptions {
  url: string
  parentElement: HTMLElement
}

interface CalendlyInitPopupWidgetOptions {
  url: string
}

interface CalendlyStatic {
  initInlineWidget(options: CalendlyInitInlineWidgetOptions): void
  initPopupWidget(options: CalendlyInitPopupWidgetOptions): void
}

declare global {
  interface Window {
    Calendly?: CalendlyStatic
  }
  var Calendly: CalendlyStatic | undefined
}

export {}
