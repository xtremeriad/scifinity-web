/* ==========================================================================
   SCIFINITY GLOBAL STATE STORE
   ========================================================================== */

type Listener = () => void;

class Store {
  private currentLang: 'en' | 'bn' = 'en';
  private mobileNavOpen: boolean = false;
  private listeners: Set<Listener> = new Set();

  get language(): 'en' | 'bn' {
    return this.currentLang;
  }

  setLanguage(lang: 'en' | 'bn') {
    if (this.currentLang !== lang) {
      this.currentLang = lang;
      document.documentElement.lang = lang;
      this.notify();
    }
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang === 'en' ? 'bn' : 'en');
  }

  get isMobileNavOpen(): boolean {
    return this.mobileNavOpen;
  }

  setMobileNavOpen(open: boolean) {
    this.mobileNavOpen = open;
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    this.notify();
  }

  toggleMobileNav() {
    this.setMobileNavOpen(!this.mobileNavOpen);
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(fn => fn());
  }
}

export const store = new Store();
