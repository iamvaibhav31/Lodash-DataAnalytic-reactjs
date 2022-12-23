import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getcol, hidecol } from '../services/Slice/colSlice'
const TableSetting = ({ setShowsetting }) => {
          const dispatch = useDispatch()
          const coloums = useSelector(getcol)
          const hidcolname = []

          // const lborderup = (name) => {
          //           if (!hidcolname.includes(name)) {

          //                     return 'border-l-4 border-l-blue-600'
          //           } else {
          //                     return ''
          //           }
          // }
          return (
                    <div className=" my-4 mb-8 border-2 border-gray-200 shadow-lg rounded-2xl p-8 ">
                              <div className="flex justify-evenly flex-wrap p-2">
                                        {coloums.map((item) => {
                                                  const lborder = item.show ? 'border-l-4 border-l-blue-600' : ''
                                                  return (
                                                            <button className={`px-4 py-2 border-2 border-gray-200 ${lborder} font-mono hover:shadow-lg rounded-md m-4`} onClick={() => {

                                                                      hidcolname.push(item.colname)

                                                            }}>{item.colname}</button>
                                                  )
                                        })}


                              </div>
                              <div className="flex justify-end p-2">
                                        {/* <div className=" self-start ">
                                                  {hidcolname.map((item) => {
                                                            return (
                                                                      <p className=" font-mono text-black">{item}</p>
                                                            )
                                                  })}
                                        </div> */}
                                        <button className="p-2 border-2 border-gray-200   font-mono hover:shadow-lg rounded-lg mx-2" onClick={() => setShowsetting(false)}>Close</button>
                                        <button className="p-2 border-2 border-blue-300   font-mono hover:shadow-lg rounded-lg mx-2" onClick={() => {
                                                  dispatch(hidecol(hidcolname))
                                        }}>Apply Change</button>
                              </div>

                    </div>
          );
};

export default TableSetting;
