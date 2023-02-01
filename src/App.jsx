import { data } from './data'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div>
      <h1 className='text-center text-red-500 text-[50px]'>List of Movies</h1>
      <div className='flex justify-around flex-wrap' >
        {data.map(d => (
          <Card title={d.Title} img={d.Image} year={d.Year} nation={d.Nation} des={d.des} />
        ))}
      </div>
    </div>
  )
}

export default App
