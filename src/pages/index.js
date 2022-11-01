export default function HomePage() {
    if (typeof window !== 'undefined') {
      window.location = 'overview/';
    }
  
    return null;
}
