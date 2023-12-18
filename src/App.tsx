
import { AlertTriangle, BellRing, CheckCheck, MessageSquareWarning, XCircle } from 'lucide-react'
import './App.css'
import Alert from './Alert/Alert'
function App() {


  return (
    <div style={{width:'80%',margin:"auto",display:'flex',flexDirection:'column',gap:'0.5rem'}}>
      <Alert
      type={"alert-default"} 
      icone={<BellRing className='bellIcone'/>} 
      title={'Upgrate your plan'}
      >
        <p>'Then go to <a href='#'>your Vite based project</a> and run pnpm link-global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!'</p>
      </Alert>
      <Alert
      type={"alert-success"} 
      icone={<CheckCheck className='bellIcone'/>} 
      title={'Your order has been processed'}
      description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert
      type={"alert-warning"} 
      icone={<AlertTriangle className='bellIcone'/>} 
      title={'Tips & Tricks'}
      description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert
      type={"alert-error"} 
      icone={<XCircle className='bellIcone'/>} 
      title={'Something went wrong'}
      description={'if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.'}
      />
      <Alert
      type={"alert-info"} 
      icone={<MessageSquareWarning className='bellIcone'/>} 
      title={'Note'}
      description={'Vite aims to provide SSR Guide support for common web development patterns. Before searching for a Vite or compatible Rollup plugin, check out the Features Guide. check out the Backend Integration guide instead.'}
      />
    </div>
  )
}

export default App
