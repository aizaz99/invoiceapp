import { Routes, Route } from 'react-router-dom'
import { SignIn, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import InvoicePage from './pages/InvoicePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <SignedIn>
            <InvoicePage />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      } />
      <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
    </Routes>
  )
}

export default App
