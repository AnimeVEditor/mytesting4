import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
