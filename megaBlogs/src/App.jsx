import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(import.meta.env.DB.PASSWORD);
  
  return (
   <>
      
      <h1>hello world</h1>
   </>
  )
}

export default App
