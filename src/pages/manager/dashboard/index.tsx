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
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Today's Money</p>
                    <h5 className='mb-0 font-bold'>
                      $53,000
                      <span className='leading-normal text-sm font-weight-bolder text-lime-500'>+55%</span>
                    </h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-lime-400'>
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
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Today's Users</p>
                    <h5 className='mb-0 font-bold'>
                      2,300
                      <span className='leading-normal text-sm font-weight-bolder text-lime-500'>+3%</span>
                    </h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-lime-400'>
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
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>New Clients</p>
                    <h5 className='mb-0 font-bold'>
                      +3,462
                      <span className='leading-normal text-red-600 text-sm font-weight-bolder'>-2%</span>
                    </h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-lime-400'>
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
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Sales</p>
                    <h5 className='mb-0 font-bold'>
                      $103,430
                      <span className='leading-normal text-sm font-weight-bolder text-lime-500'>+5%</span>
                    </h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-lime-400'>
                    <i className='ni leading-none ni-cart text-lg relative top-3.5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
