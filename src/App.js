import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import UniversityCard from './components/universityCard/UniversityCard'
import Pagination from './components/pagination/Pagination'

function App() {
  const [dataPages, setDataPages] = useState(1)
  const [currentpage, setCurrentPage] = useState(1)
  const [universities, setUniversities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const handlingChangePage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  useEffect(() => {
    axios
      .get('http://universities.hipolabs.com/search?country=United+States')
      .then((res) => {
        let data = res.data
        let newDataStructure = []
        while (data.length > 0) {
          let chunk = data.splice(0, 10)
          newDataStructure.push(chunk)
        }
        setDataPages(newDataStructure.length)
        setUniversities(newDataStructure)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(true)
        console.log(err.message)
      })
  }, [])
  return isLoading ? (
    <div className="w-100 m-4 mx-auto text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : error ? (
    <div className="spinner-border text-danger" role="status"></div>
  ) : (
    <>
      <section className="universitiesSection text-danger">
        <div className="universitiesContainer">
          {universities[currentpage - 1].map((uni, ind) => (
            <UniversityCard uni={uni} key={ind} />
          ))}
        </div>
      </section>
      <Pagination
        handlingChangePage={handlingChangePage}
        currentpage={currentpage}
        dataPages={dataPages}
      />
    </>
  )
}

export default App
