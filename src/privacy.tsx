import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Latin subsets only — the site ships no copy that needs Cyrillic, Greek or
   Vietnamese, and shipping those subsets would put ~20 unused woff2 files in
   the committed build output. */
import '@fontsource/saira-condensed/latin-400.css'
import '@fontsource/saira-condensed/latin-700.css'
import '@fontsource/saira-condensed/latin-800.css'
import '@fontsource/barlow/latin-400.css'
import '@fontsource/barlow/latin-500.css'
import '@fontsource/barlow/latin-600.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'

import './styles/tokens.css'
import './styles/app.css'
import Privacy from './pages/Privacy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Privacy />
  </StrictMode>,
)
