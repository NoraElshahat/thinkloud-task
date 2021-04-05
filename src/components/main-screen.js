import { Link } from 'react-router-dom';
import { mobileInfo } from './mobileInfo';
import { useEffect, useState } from 'react';
export default function MainScreen() {
  const [mobiles, updateMobiles] = useState([]);
  useEffect(() => {
    const mobiles = JSON.parse(localStorage.getItem('mobiles'));
    updateMobiles(mobiles);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Link to="/add-mobile">
            <button className="btn btn-info mt-5">Add New Mobile</button>
          </Link>
          <div className="col-5 m-5">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile"
                  name="mobile"
                />
                <select className="custom-select mt-3">
                  <option value>Select Brand</option>
                  {mobileInfo.memory.map((item, index) => {
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
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              {mobiles.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <div className="col-4">main screen</div> */}
      </div>
    </div>
  );
}
