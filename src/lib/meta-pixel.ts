// Declara a função fbq no escopo global para o TypeScript
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const trackViewContent = () => {
  window.fbq?.('track', 'ViewContent');
};

export const trackLead = () => {
  window.fbq?.('track', 'Lead');
};