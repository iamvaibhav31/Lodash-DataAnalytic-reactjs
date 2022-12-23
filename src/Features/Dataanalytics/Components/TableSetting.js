import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getcol, hidecol } from '../services/Slice/colSlice';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
const TableSetting = ({ setShowsetting }) => {
          const dispatch = useDispatch()
          const coloums = useSelector(getcol)
          const hidcolname = []
          const handledragend = (result) => {
                    console.log(result)
          }
          console.log(hidcolname)
          return (

                    <div className=" my-4 mb-8 border-2 border-gray-200 shadow-lg rounded-2xl p-8 ">
                              <DragDropContext onDragEnd={result => handledragend(result)}>
                                        <Droppable droppableId="dndcontainer">
                                                  {(Provider) => (
                                                            <div ref={Provider.innerRef} {...Provider.droppableProps} className="flex justify-evenly flex-wrap p-2">
                                                                      {coloums.map((item, index) => {
                                                                                const lborder = item.show ? 'border-l-4 border-l-blue-600' : ''
                                                                                return (
                                                                                          <Draggable draggableId={item.name_id} index={index} key={index}>
                                                                                                    {(Provider) => (
                                                                                                              <button ref={Provider.innerRef} {...Provider.draggableProps} {...Provider.dragHandleProps} className={`px-4 py-2 border-2 border-gray-200 ${lborder} font-mono hover:shadow-lg rounded-md m-4`} onClick={() => {

                                                                                                                        hidcolname.push(item.colname)

                                                                                                              }}>{item.colname}</button>
                                                                                                    )}
                                                                                          </Draggable>

                                                                                )
                                                                      })}

                                                                      {Provider.placeholder}
                                                            </div>
                                                  )}
                                        </Droppable>

                                        <div className="flex justify-end p-2">

                                                  <button className="p-2 border-2 border-gray-200   font-mono hover:shadow-lg rounded-lg mx-2" onClick={() => setShowsetting(false)}>Close</button>
                                                  <button className="p-2 border-2 border-blue-300   font-mono hover:shadow-lg rounded-lg mx-2" onClick={() => {
                                                            dispatch(hidecol(hidcolname))
                                                  }}>Apply Change</button>
                                        </div>
                              </DragDropContext>
                    </div>

          );
};

export default TableSetting;
