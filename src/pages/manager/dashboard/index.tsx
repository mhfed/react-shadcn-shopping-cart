const DashboardPage = () => {
  return (
    <div className='w-full px-6 py-6 mx-auto'>
      {/* row 1 */}
      <div className='flex flex-wrap -mx-3'>
        {/* card1 */}
        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>
                      Today's Money
                    </p>
                    <h5 className='mb-0 font-bold'>
                      $53,000
                      <span className='leading-normal text-sm font-weight-bolder text-lime-500'>
                        +55%
                      </span>
                    </h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500'>
                    <i className='ni leading-none ni-money-coins text-lg relative top-3.5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>
                      Today's Users
                    </p>
                    <h5 className='mb-0 font-bold'>
                      2,300
                      <span className='leading-normal text-sm font-weight-bolder text-lime-500'>
                        +3%
                      </span>
                    </h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500'>
                    <i className='ni leading-none ni-world text-lg relative top-3.5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>
                      New Clients
                    </p>
                    <h5 className='mb-0 font-bold'>
                      +3,462
                      <span className='leading-normal text-red-600 text-sm font-weight-bolder'>
                        -2%
                      </span>
                    </h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500'>
                    <i className='ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className='w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>
                      Sales
                    </p>
                    <h5 className='mb-0 font-bold'>
                      $103,430
                      <span className='leading-normal text-sm font-weight-bolder text-lime-500'>
                        +5%
                      </span>
                    </h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500'>
                    <i className='ni leading-none ni-cart text-lg relative top-3.5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards row 2 */}
      <div className='flex flex-wrap mt-6 -mx-3'>
        <div className='w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-wrap -mx-3'>
                <div className='max-w-full px-3 lg:w-1/2 lg:flex-none'>
                  <div className='flex flex-col h-full'>
                    <p className='pt-2 mb-1 font-semibold'>
                      Built by developers
                    </p>
                    <h5 className='font-bold'>Soft UI Dashboard</h5>
                    <p className='mb-12'>
                      From colors, cards, typography to complex elements, you
                      will find the full documentation.
                    </p>
                    <a
                      className='mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500'
                      href='javascript:;'
                    >
                      Read More
                      <i className='fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200' />
                    </a>
                  </div>
                </div>
                <div className='max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none'>
                  <div className='h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl'>
                    <img
                      src='../assets/img/shapes/waves-white.svg'
                      className='absolute top-0 hidden w-1/2 h-full lg:block'
                      alt='waves'
                    />
                    <div className='relative flex items-center justify-center h-full'>
                      <img
                        className='relative z-20 w-full pt-6'
                        src='../assets/img/illustrations/rocket-white.png'
                        alt='rocket'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full max-w-full px-3 lg:w-5/12 lg:flex-none'>
          <div className='border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4'>
            <div
              className='relative h-full overflow-hidden bg-cover rounded-xl'
              style={{
                backgroundImage: 'url("../assets/img/ivancik.jpg")',
              }}
            >
              <span className='absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80' />
              <div className='relative z-10 flex flex-col flex-auto h-full p-4'>
                <h5 className='pt-2 mb-6 font-bold text-white'>
                  Work with the rockets
                </h5>
                <p className='text-white'>
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
                <a
                  className='mt-auto mb-0 font-semibold leading-normal text-white group text-sm'
                  href='javascript:;'
                >
                  Read More
                  <i className='fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
