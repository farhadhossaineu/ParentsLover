import heroImg from '../assets/Parentslover-01.jpg'

const HeroSection = () => {
  return (
    <section className='w-full p-4 py-24 bg-white'>
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 max-w-[400px]'>
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-4xl text-[#208486] font-bold'>LOVE YOUR PARENTS</p>
                <h1 className='md:leading-[42px] py-2 md:text-3xl text-lg font-semibold'>
                 Allah! Forgive me and my parents, and the believers on the Day of Reckoning
                </h1>
                {/* <p className='py-2 text-lg text-gray-900'>Various versions have evolved over the years</p> */}
                {/* <form className='flex items-center gap-2 bg-transparent input-box-shadow justify-content-between'>
                    <input type="text" className="w-full px-5 py-3 my-2 text-base font-normal bg-transparent border border-solid outline-none border-neutral-300 bg-clip-padding text-neutral-700 placeholder:text-neutral-500" placeholder='search for courses here'/>
                    <button>
                        <AiOutlineSearch
                            size={30}
                            className='icon'
                            style={{ color:'#000' }}
                        />
                    </button>
                </form> */}
            </div>
            <img src={heroImg} alt="hero" className='order-first md:order-last'/>
        </div>
    </section>
  )
}

export default HeroSection