// import ProductList from '@/features/products/_components/List';
import React from 'react';

const ManagerProductPage = () => {
  return (
    <div className=''>
      <div className='flex flex-wrap -mx-3'>
        <div className='flex-none w-full max-w-full px-3'>
          <div className='relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
              <h6>Authors table</h6>
            </div>
            <div className='flex-auto px-0 pt-0 pb-2'>
              <div className='p-0 overflow-x-auto'>
                <table className='items-center w-full mb-0 align-top border-gray-200 text-slate-500'>
                  <thead className='align-bottom'>
                    <tr>
                      <th className='px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Author
                      </th>
                      <th className='px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Function
                      </th>
                      <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Status
                      </th>
                      <th className='px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70'>
                        Employed
                      </th>
                      <th className='px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70' />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <div className='flex px-2 py-1'>
                          <div>
                            <img
                              src='../assets/img/team-2.jpg'
                              className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl'
                              alt='user1'
                            />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <h6 className='mb-0 text-sm leading-normal'>
                              John Michael
                            </h6>
                            <p className='mb-0 text-xs leading-tight text-slate-400'>
                              john@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <p className='mb-0 text-xs font-semibold leading-tight'>
                          Manager
                        </p>
                        <p className='mb-0 text-xs leading-tight text-slate-400'>
                          Organization
                        </p>
                      </td>
                      <td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                          Online
                        </span>
                      </td>
                      <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='text-xs font-semibold leading-tight text-slate-400'>
                          23/04/18
                        </span>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <a
                          className='relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text'
                          href='javascript:;'
                        >
                          <i className='mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text' />
                          Delete
                        </a>
                        <a
                          className='inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700'
                          href='javascript:;'
                        >
                          <i
                            className='mr-2 fas fa-pencil-alt text-slate-700'
                            aria-hidden='true'
                          />
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <div className='flex px-2 py-1'>
                          <div>
                            <img
                              src='../assets/img/team-3.jpg'
                              className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl'
                              alt='user2'
                            />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <h6 className='mb-0 text-sm leading-normal'>
                              Alexa Liras
                            </h6>
                            <p className='mb-0 text-xs leading-tight text-slate-400'>
                              alexa@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <p className='mb-0 text-xs font-semibold leading-tight'>
                          Programator
                        </p>
                        <p className='mb-0 text-xs leading-tight text-slate-400'>
                          Developer
                        </p>
                      </td>
                      <td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                          Offline
                        </span>
                      </td>
                      <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='text-xs font-semibold leading-tight text-slate-400'>
                          11/01/19
                        </span>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <a
                          href='javascript:;'
                          className='text-xs font-semibold leading-tight text-slate-400'
                        >
                          {' '}
                          Edit{' '}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <div className='flex px-2 py-1'>
                          <div>
                            <img
                              src='../assets/img/team-4.jpg'
                              className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl'
                              alt='user3'
                            />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <h6 className='mb-0 text-sm leading-normal'>
                              Laurent Perrier
                            </h6>
                            <p className='mb-0 text-xs leading-tight text-slate-400'>
                              laurent@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <p className='mb-0 text-xs font-semibold leading-tight'>
                          Executive
                        </p>
                        <p className='mb-0 text-xs leading-tight text-slate-400'>
                          Projects
                        </p>
                      </td>
                      <td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                          Online
                        </span>
                      </td>
                      <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='text-xs font-semibold leading-tight text-slate-400'>
                          19/09/17
                        </span>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <a
                          href='javascript:;'
                          className='text-xs font-semibold leading-tight text-slate-400'
                        >
                          {' '}
                          Edit{' '}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <div className='flex px-2 py-1'>
                          <div>
                            <img
                              src='../assets/img/team-3.jpg'
                              className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl'
                              alt='user4'
                            />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <h6 className='mb-0 text-sm leading-normal'>
                              Michael Levi
                            </h6>
                            <p className='mb-0 text-xs leading-tight text-slate-400'>
                              michael@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <p className='mb-0 text-xs font-semibold leading-tight'>
                          Programator
                        </p>
                        <p className='mb-0 text-xs leading-tight text-slate-400'>
                          Developer
                        </p>
                      </td>
                      <td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                          Online
                        </span>
                      </td>
                      <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='text-xs font-semibold leading-tight text-slate-400'>
                          24/12/08
                        </span>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <a
                          href='javascript:;'
                          className='text-xs font-semibold leading-tight text-slate-400'
                        >
                          {' '}
                          Edit{' '}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <div className='flex px-2 py-1'>
                          <div>
                            <img
                              src='../assets/img/team-2.jpg'
                              className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl'
                              alt='user5'
                            />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <h6 className='mb-0 text-sm leading-normal'>
                              Richard Gran
                            </h6>
                            <p className='mb-0 text-xs leading-tight text-slate-400'>
                              richard@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <p className='mb-0 text-xs font-semibold leading-tight'>
                          Manager
                        </p>
                        <p className='mb-0 text-xs leading-tight text-slate-400'>
                          Executive
                        </p>
                      </td>
                      <td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                          Offline
                        </span>
                      </td>
                      <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <span className='text-xs font-semibold leading-tight text-slate-400'>
                          04/10/21
                        </span>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
                        <a
                          href='javascript:;'
                          className='text-xs font-semibold leading-tight text-slate-400'
                        >
                          {' '}
                          Edit{' '}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
                        <div className='flex px-2 py-1'>
                          <div>
                            <img
                              src='../assets/img/team-4.jpg'
                              className='inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl'
                              alt='user6'
                            />
                          </div>
                          <div className='flex flex-col justify-center'>
                            <h6 className='mb-0 text-sm leading-normal'>
                              Miriam Eric
                            </h6>
                            <p className='mb-0 text-xs leading-tight text-slate-400'>
                              miriam@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
                        <p className='mb-0 text-xs font-semibold leading-tight'>
                          Programtor
                        </p>
                        <p className='mb-0 text-xs leading-tight text-slate-400'>
                          Developer
                        </p>
                      </td>
                      <td className='p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
                        <span className='bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white'>
                          Offline
                        </span>
                      </td>
                      <td className='p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
                        <span className='text-xs font-semibold leading-tight text-slate-400'>
                          14/09/20
                        </span>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent'>
                        <a
                          href='javascript:;'
                          className='text-xs font-semibold leading-tight text-slate-400'
                        >
                          {' '}
                          Edit{' '}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerProductPage;
