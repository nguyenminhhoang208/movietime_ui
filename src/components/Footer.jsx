import React from "react";
import { Link } from "react-router-dom";
import logoMovieTime from '~/assets/img/logo_MovieTime.png'

const Footer = () => {
  return (
    <div className="w-full h-[260px] bg-black flex justify-center">
      <div className="w-[90%] py-5 flex justify-between">
        <div className="lg:w-[15%] sm:w-[35%] w-[45%]  h-full ">
          <Link to='/'><img src={logoMovieTime} alt='logo'/></Link>
        </div>
        <ul className="w-[15%] h-full hidden  lg:block">
          <h1 className="text-mainColor font-bold">Phim Mới</h1>
          <ul className="mt-1">
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim chiếu rạp</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim lẻ</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim bộ</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim hành động</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim viễn tưởng</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim tâm lý</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim hài hước</li>
          </ul>
        </ul>
        <ul className="w-[15%] h-full hidden  lg:block">
          <h1 className="text-mainColor font-bold">Phim Mới</h1>
          <ul className="mt-1">
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim chiếu rạp</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim lẻ</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim bộ</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim hành động</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim viễn tưởng</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim tâm lý</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim hài hước</li>
          </ul>
        </ul>
        <ul className="w-[15%] h-full hidden  lg:block">
          <h1 className="text-mainColor font-bold">Phim Mới</h1>
          <ul className="mt-1">
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim chiếu rạp</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim lẻ</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim bộ</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim hành động</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim viễn tưởng</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim tâm lý</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim hài hước</li>
          </ul>
        </ul>
        <ul className="w-[15%] h-full hidden lg:block ">
          <h1 className="text-mainColor font-bold">Phim Mới</h1>
          <ul className="mt-1">
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim chiếu rạp</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim lẻ</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim bộ</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim hành động</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim viễn tưởng</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim tâm lý</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Phim hài hước</li>
          </ul>
        </ul>
        <ul className="lg:w-[15%] sm:w-[35%] w-[45%] h-full  ">
          <h1 className="text-mainColor font-bold">Thông Tin</h1>
          <ul className="mt-1">
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Điều khoản sử dụng</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Chính sách riêng tư</li>
            <li className="py-[2px] hover:text-mainColor cursor-pointer">Khiếu nại bản quyền</li>
            <li className="py-[2px] ">© 2022 MovieTime.Net</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
