import './App.css';
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    initialMoney: '',
    percent: '',
    process: '',
    commission: 0,
  })
  const [result, setResult] = useState('')

  // console.log(formData);

  const { initialMoney, percent, process, commission } = formData // state'i destructuring yaptik

  const onChange = (e) => {
    setFormData((prevState) => ({ // bu sekilde bir defa yazarak hallediyoruz
      ...prevState,
      [e.target.name]: e.target.value
      // key'i e.target.name den aliyoruz. value'yu e.target.value'dan aliyoruz
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    var i

    var value1 = Number(initialMoney)
    //var value1 = (Number(initialMoney) * Number(percent) / 100) + Number(initialMoney)

    for (i = 0; i < process; i++) {
      value1 = ((value1 * Number(percent) / 100) + (value1)) - (value1 * Number(commission) / 1000) // komisyonlu sekilde

      console.log(i, ": ", "percent= ", (value1 * Number(percent) / 100), " total= ", value1);
    }

    // for (i = 0; i < process; i++) {
    //   value1 = (value1 * Number(percent) / 100) + (value1)
    // }

    setResult(value1.toFixed(2))
  }

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
      <section className="heading">
        <h1>
          Profitable Sales Calculation
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Initial Money </label>
            <input
              type="number" className="form-control" id='initialMoney' name='initialMoney' value={initialMoney} placeholder='Enter your InitialMoney'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Percent %</label>
            <input
              type="number" className="form-control" id='percent' name='percent' value={percent} placeholder='Enter Percent'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Number of Process</label>
            <input
              type="number" className="form-control" id='process' name='process' value={process} placeholder='Enter process value'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Commission per 1000</label>
            <input
              type="number" className="form-control" id='commission' name='commission' value={commission} placeholder='Enter commission'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type='submit' className="btn btn-block">
              Calculate
            </button>
          </div>
        </form>

        <div className="form-group">
          <label>Total Money</label>
          <input
            type="number" className="form-control" id='result' name='result' value={result} placeholder='Result'
          />
        </div>
      </section>
    </>
  )
}

export default App;
