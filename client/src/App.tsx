import { Route, Switch } from 'wouter'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Home from './pages/home'
import Services from './pages/services'
import Company from './pages/company'
import Support from './pages/support'
import NotFound from './pages/not-found'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/company" component={Company} />
          <Route path="/support" component={Support} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
