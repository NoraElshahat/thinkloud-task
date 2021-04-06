import { Link } from 'react-router-dom';
import { mobileInfo } from './mobileInfo';
import { useEffect, useState } from 'react';
import BarChart from './bar-chart';
import DonutChart from './donut-chart';

export default function MainScreen() {
  const [mobiles, updateMobiles] = useState([]);
  const [model, updateModel] = useState('');
  const [brand, updateBrand] = useState([]);
  const [countMobiles, updateCount] = useState({});
  const [resultRoww, updateRes] = useState({});
  const count = {};
  useEffect(() => {
    const mobiles = JSON.parse(localStorage.getItem('mobiles'));
    if (mobiles) {
      updateMobiles(mobiles);
    } else {
      updateMobiles([]);
    }
    if (mobiles) {
      mobiles.forEach((element) => {
        count[element.year] ? count[element.year]++ : (count[element.year] = 1);
      });
      updateCount(count);
    } else {
      updateCount({});
    }
  }, []);

  function handleChange(e) {
    const model = e.target.value;
    updateModel(model);
  }
  function searchBy(e) {
    e.preventDefault();
    const findModel = mobiles.filter((item) => {
      return item.model == model || item.brand == brand;
    });
    updateMobiles(findModel);
  }
  function handleChangeSelect(e) {
    const brand = e.target.value;
    updateBrand(brand);
  }
  function onMouseOver(e, index) {
    console.log(index);
    const resultRow = mobiles[index];
    updateRes(resultRow);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Link to="/add-mobile">
            <button className="btn btn-info mt-5">Add New Mobile</button>
          </Link>
          <div className="col-5 m-5">
            <form onSubmit={searchBy}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Model"
                  name="model"
                  value={model}
                  onChange={handleChange}
                />
                <select
                  className="custom-select mt-3"
                  onChange={handleChangeSelect}
                  name="brand"
                >
                  <option value>Select Brand</option>
                  {mobileInfo.brand.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </select>
              </div>
              <button className="btn btn-info mt-2">Search Mobile</button>
            </form>
          </div>

          <table className="table table-hover col-7">
            <thead>
              <tr>
                <th>#</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              {mobiles.map((item, index) => {
                return (
                  <tr
                    key={index}
                    value={index}
                    onMouseEnter={() => onMouseOver(this, index)}
                  >
                    <td data={index} key={index} name="index">
                      {index}
                    </td>
                    <td data={index} name="brand">
                      {item.brand}
                    </td>
                    <td data={index} name="model">
                      {item.model}
                    </td>
                    <td data={index} name="year">
                      {item.year}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {Object.keys(resultRoww).length ? (
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="card-title">Model : {resultRoww.model}</h5>
                <p className="card-text">
                  Year : {resultRoww.year}
                  <br></br>
                  Brand : {resultRoww.brand}
                  <br></br>
                  Memory : {resultRoww.memory}
                </p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="col-4 mt-5 pt-5">
          <BarChart count={count} />
          <DonutChart />
        </div>
      </div>
    </div>
  );
}
