import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import {
  FaTwitter,
  FaFacebookF,
  FaProductHunt,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'
import {
  CommunityValues,
  CompanyValues,
  ProductValues,
} from '../../utils/constant'

const Footer = () => {
  return (
    <footer className="sm:flex sm:flex-col sm:items-center sm:justify-between 2xl:justify-around bg-[#17191F]">
      <div className=" w-full mx-2 sm:mx-6 p-4 sm:p-8 sm:flex justify-between 2xl:justify-around mt-6 text-white">
        <div className="hidden sm:flex mb-6 md:mb-0">
          <div>
            <span>
              <p className="text-white text-2xl ml-2 font-bold">
                <button>Daily.Dev/blog</button>
              </p>
            </span>
            <span>
              <p className="mt-6 text-gray-500 text-base ml-2">
                daily.dev is an online community where developers grow together.
              </p>
            </span>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row  gap-x-6">
            <div className="mb-8">
              <h2 className="mb-6 text-xl font-bold text-blue-500 uppercase cursor-text">
                Product
              </h2>
              <ul className="text-gray-500">
                {ProductValues.map((ele, index) => {
                  return (
                    <li
                      key={index}
                      className="mb-3 hover:text-white cursor-pointer"
                    >
                      {ele}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="mb-6 text-xl font-bold text-pink-500 uppercase cursor-text">
                Community
              </h2>
              <ul className="text-gray-500">
                {CommunityValues.map((values, index) => {
                  return (
                    <li
                      key={index}
                      className="mb-3 hover:text-white cursor-pointer"
                    >
                      {values}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="mb-6 text-xl font-bold text-green-500 uppercase cursor-text">
                Company
              </h2>
              <ul className="text-gray-500">
                {CompanyValues.map((values, index) => {
                  return (
                    <li
                      key={index}
                      className="mb-3 hover:text-white cursor-pointer"
                    >
                      {values}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-full border-gray-600  mx-2 sm:mx-6 p-4 sm:p-8 sm:flex sm:justify-between 2xl:justify-around mt-6 text-white">
        <div className="sm:ml-2 m-4 flex flex-col gap-y-8">
          <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start gap-y-4">
            <p className="text-white text-2xl font-bold">
              COMMUNITY NEWSLETTER
            </p>
            <p className="text-gray-500">
              Try our newsletter and we&#39;ll save your time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-4 gap-x-4">
            <input
              type="text"
              placeholder="Your email address"
              className="h-14 p-3 pr-32 rounded-2xl bg-[#ffffff14] border outline-none border-gray-500 focus:border-sky-700 hover:border-white "
            />
            <button className="h-14 p-3 px-10 rounded-2xl bg-red-500 hover:bg-pink-500 text-base text-center font-semibold  uppercase">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <AiFillGithub className="text-3xl cursor-pointer text-gray-500  hover:text-white" />
          <FaTwitter className="text-3xl cursor-pointer text-gray-500  hover:text-white" />
          <FaFacebookF className="text-3xl cursor-pointer text-gray-500  hover:text-white" />
          <FaInstagram className="text-3xl cursor-pointer text-gray-500  hover:text-white" />
          <FaLinkedin className="text-3xl cursor-pointer text-gray-500  hover:text-white" />
          <FaYoutube className="text-3xl cursor-pointer text-gray-500  hover:text-white" />
          <FaProductHunt className="text-3xl cursor-pointer text-gray-500  hover:text-white" />
        </div>
      </div>
      <div className="border-t-2 w-full border-gray-600  mx-2 sm:mx-6 p-4 sm:p-8 sm:flex sm:justify-between 2xl:justify-around mt-6 text-white">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href=" " className="hover:underline">
            Daily.Dev/blog
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
