import { useEffect } from "react"
import axios from "axios"

const App = () => {

  const test = async () => {

    try {
      const { data } = await axios.get("/api/v1/test")
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    test()
  }, [])

  return (
    <div>
      Open console
    </div>
  )
}

export default App
