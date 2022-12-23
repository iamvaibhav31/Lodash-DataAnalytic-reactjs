import React from "react";

const Tablerow = ({ dataitem, col }) => {
          // console.log(dataitem, col)
          return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                              {col.map((item) => {

                                        return (
                                                  <>
                                                            {item.show && <td class="py-4 px-6">

                                                                      {dataitem[item.name_id]}
                                                            </td>}
                                                  </>

                                        )
                              })}


                    </tr>
          );
};

export default Tablerow;
