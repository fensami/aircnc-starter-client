import React from 'react';
import Container from '../../conponents/shared/Navbar/Container';
import Header from '../../conponents/Room/Header';
import RoomInfo from '../../conponents/Room/RoomInfo';
import RoomReservation from '../../conponents/Room/RoomReservation';

const RoomDetails = () => {
          return (
          <Container>
          <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
                    {/* <article>Header</article>
                     */}
                     <Header></Header>
                     

                    <article className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                      <RoomInfo/>

                      <div className='mb-10 md:col-span-3 md:order-last order-first'>
                      <RoomReservation></RoomReservation>

                      </div>
                      
                      {/* <div>Header</div>

                    <div>Calender</div> */}

                    </article>
                    {/* date calender */}
                   
          </div>
          </div>
          </Container>
          );
};

export default RoomDetails;