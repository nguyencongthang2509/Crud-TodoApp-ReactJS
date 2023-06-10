import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../config/api";
import "./test.css";
import CommentComponent from "./comment";

const CreateNhanVien = () => {
  const navigate = useNavigate(); // $location

  const [nhanVien, setNhanVien] = useState({
    ma: "",
    ten: "",
    gioiTinh: "Nam",
    diaChi: "",
  });

  console.log(nhanVien);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setNhanVien((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // logic:

  const createNhanVien = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiURL + "/add", nhanVien);
      alert("Thêm thành công");
      navigate("/"); // chuyển hướng thực hiện chức năng
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p className="abc">aaaaaaaaaaaaaaaaaaaaa</p>
      <h2 className="text-center">Create nhân viên</h2>
      <form onSubmit={createNhanVien}>
        <div className="mb-3">
          <label for="" className="form-label">
            Mã:
          </label>
          <input
            className="form-control"
            placeholder="Nhập mã"
            type="text"
            value={nhanVien.ma}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Tên:
          </label>
          <input
            className="form-control"
            placeholder="Nhập tên"
            type="text"
            value={nhanVien.ten}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Địa chỉ:
          </label>
          <input
            className="form-control"
            placeholder="Nhập địa chỉ"
            type="text"
            value={nhanVien.diaChi}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div className="mb-3">
            <label className="form-label">Giới tính:</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gioiTinh"
                value="Nam"
                checked={nhanVien.gioiTinh === "Nam"}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Nam</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gioiTinh"
                value="Nu"
                checked={nhanVien.gioiTinh === "Nu"}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Nữ</label>
            </div>
          </div>
        </div>
        <button type="submit">Create</button>
      </form>
      <CommentComponent />
    </div>
  );
};

export default CreateNhanVien;
