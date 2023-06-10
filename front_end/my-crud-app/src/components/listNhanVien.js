import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiURL } from "../config/api";

const ListNhanVien = () => {
  const [nhanViens, setNhanVien] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // hàm tạo
    fetchNhanViens();
  }, []);

  const fetchNhanViens = async () => {
    try {
      const respone = await axios.get(apiURL + "/hien-thi");
      setNhanVien(respone.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const deleteNhanVien = async (id) => {
    try {
      await axios.delete(apiURL + "/delete/" + id);

      setNhanVien((prevNhanViens) =>
        prevNhanViens.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncreaseCount = (e) => {
    setCount(++e.target.value);
  };

  return (
    <div>
      <h1 className="text-center">List nhân viên</h1>
      <Link to="/create" className="btn btn-info m-5">
        Add
      </Link>
      <button onClick={handleIncreaseCount}>Tăng</button>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Mã</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {nhanViens.map((nhanVien) => (
            <tr key={nhanVien.id}>
              <td>{nhanVien.id}</td>
              <td>{nhanVien.ma}</td>
              <td>{nhanVien.ten}</td>
              <td>{nhanVien.gioiTinh}</td>
              <td>{nhanVien.diaChi}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteNhanVien(nhanVien.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/detail/${nhanVien.id}`}
                  className="btn btn-success ml-4"
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListNhanVien;
