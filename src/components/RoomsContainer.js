import React from "react";

import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";

import { withRoomConsumer } from "../context";

const RoomsContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </React.Fragment>
  );
};

export default withRoomConsumer(RoomsContainer);

// import React from 'react';

// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import Loading from './Loading';

// import { RoomConsumer } from '../context';

// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {
//           const { loading, sortedRooms, rooms } = value;
//           if (loading) {
//             return <Loading />
//           }
//           return (
//             <div>
//               Hello from Rooms RoomsContainer
//               <RoomsFilter rooms={rooms} />
//               <RoomsList room={sortedRooms}/>
//             </div>
//           )
//         }
//       }
//     </RoomConsumer>

//   );
// };

// export default RoomsContainer;
