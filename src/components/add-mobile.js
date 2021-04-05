import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { mobileInfo } from './mobileInfo';
export default function AddMobile() {
  const mobiles = [];

  let history = useHistory();
  const [mobile, updateMobile] = useState({
    model: '',
    year: '',
    brand: '',
    memory: '',
  });
  function handleChang(e) {
    updateMobile({ ...mobile, [e.target.name]: e.target.value });
  }

  function addMobile(event) {
    event.preventDefault();
    const oldData = JSON.parse(localStorage.getItem('mobiles')) || [];
    const mobiles = [...oldData, mobile];
    localStorage.setItem('mobiles', JSON.stringify(mobiles));
    history.push('/');
  }
  return (
    <div className="col-5 m-5">
      <form onSubmit={addMobile}>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Model"
            name="model"
            onChange={handleChang}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Manufacture Year"
            name="year"
            onChange={handleChang}
          />
          <select
            className="custom-select mt-3"
            name="brand"
            onChange={handleChang}
            selected
          >
            <option>Select Brand</option>
            {mobileInfo.brand.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          <select
            className="custom-select mt-3"
            name="memory"
            onChange={handleChang}
            selected
          >
            <option>Select Memory</option>
            {mobileInfo.memory.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
        </div>
        <button className="btn btn-info m-2">Save</button>
        <Link to="/">
          <button className="btn btn-info m-2">Back</button>
        </Link>
      </form>
    </div>
  );
}
