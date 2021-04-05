import { Link } from 'react-router-dom';
import { mobileInfo } from './mobileInfo';
import { useEffect, useState } from 'react';
import BarChart from './bar-chart';

export default function MainScreen() {
  const [mobiles, updateMobiles] = useState([]);
  const [model, updateModel] = useState('');
  const [brand, updateBrand] = useState([]);
  const [count, updateCount] = useState();
  useEffect(() => {
    const mobiles = JSON.parse(localStorage.getItem('mobiles'));
    updateMobiles(mobiles);
    const countBasedOnYear = mobiles.filter((item) => {
      return item.year == 2010;
    }).length;
    updateCount(countBasedOnYear);
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
  function onMouseOver(e) {
    console.log(e.target);
    const hoverData = e.target.value;
    console.log(hoverData);
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
                  <tr key={index} value={index} onClick={onMouseOver}>
                    <td value={index} name="index">
                      {index}
                    </td>
                    <td value={item.brand} name="brand">
                      {item.brand}
                    </td>
                    <td value={item.model} name="model">
                      {item.model}
                    </td>
                    <td value={item.year} name="year">
                      {item.year}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <BarChart countArrayy={count} />
        </div>
      </div>
    </div>
  );
}
