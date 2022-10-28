import React from 'react'
import how1 from "../images/how1.png";
import how2 from "../images/how2.png";
import how3 from "../images/how3.png";


function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}  




const Howitworks = () => {
  
  return (
    
    <section className="testimonial  py-20">
      <div className="justify-center items-center text-center py-4 px-3 container mx-auto">
        <div >
        <h2 className='grid justify-items-center'
          style={{
          fontWeight: 600,
          fontSize: 35,
          fontFamily: 'Poppins',
          lineHeight: 5,
          color: 'black',
        }}
        > 
          How does it work
        </h2>
        </div>

        <div className="block mx-auto bg-white-300">
          <div className=" mx-auto container flex flex-col  items-center gap-2 md:flex-row md:px-28 md:space-x-6 md:max-w-6xl ">
            
            {/* Image 1 */}

            <div className="w-1/3 block " >
              <div className=" grid justify-items-center py-8 " >
                
                <img src={how1} alt="" className=" grid justify-items-center " />

              </div>
              <div className=" grid justify-items-center  ">
                <Box
                  style={{
                    backgroundColor: '#EE9A4D',
                    borderRadius: 10,
                    color: '#eee',
                    minHeight: 20,
                    padding: 5,
                    width: 200,
                  }}
                >
                  <div className=" text-center" 
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      fontFamily: 'Poppins',
                      lineHeight: 2,
                      color: 'white',
                    }}
                  >
                    Sign up
                  </div>

                </Box>
              </div>
            
            </div>
            
            {/* ////////////////////Image 2 */}

            <div className="w-1/3 block " >
              <div className=" grid justify-items-center py-6 " >
                
                <img src={how2} alt="" className="  " />

              </div>
              <div className=" grid justify-items-center  ">
                <Box
                  style={{
                    backgroundColor: '#EE9A4D',
                    borderRadius: 10,
                    color: '#eee',
                    minHeight: 20,
                    padding: 5,
                    width: 200,
                  }}
                >
                  <div className="text-center "
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      fontFamily: 'Poppins',
                      lineHeight: 2,
                      color: 'white',
                    }}
                  >
                    Choose a category
                  </div>

                </Box>
              </div>
            
            </div>

           {/* /////////////////////////////////////Image 3 */}

            <div className="w-1/3 block " >
              <div className=" grid justify-items-center py-8" >
                
                <img src={how3} alt="" className="  " />

              </div>
              <div className=" grid justify-items-center  ">
              <Box
                style={{
                  backgroundColor: '#EE9A4D',
                  borderRadius: 10,
                  color: '#eee',
                  minHeight: 20,
                  padding: 5,
                  width: 200,
                }}
              >
                <div className="text-center"
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    fontFamily: 'Poppins',
                    lineHeight: 2,
                    color: 'white',
                  }}
                >
                  get paired
                </div>

              </Box>
              </div>
            
            </div>


            

          </div> 
        </div>
      </div>
      {/* justify-center  
      items-center  */}
      <div className="  text-center py-6 px-6 container mx-auto pt-20">
      
      
        <div className="  grid justify-items-center ">

          <Box
            style={{
              backgroundColor: '#EE9A4D',
              borderRadius: 10,
              color: '#eee',
              height: 60,
              padding: 5,
              width: 200,
            }}
            >
            <div className="text-center py-4 px-4"
              style={{
                fontWeight: 500,
                fontSize: 16,
                fontFamily: 'Poppins',
                lineHeight: 2,
                color: 'white',
              }}            
            >
              SIGN UP FOR FREE
            </div>
            

          </Box>
        </div>
      </div>







        
    </section>
  )
}

export default Howitworks


