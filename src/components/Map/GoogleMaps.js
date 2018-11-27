// import React, { Component } from "react";
// import { Grid, Row, Col } from "react-bootstrap";
// // react components used to create a google map
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";

// import MapCard from "../Card/MapCard";



// const RegularMap = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={13}
//       defaultCenter={{ lat: 33.4484, lng: -112.0740 }}
//       defaultOptions={{
//         scrollwheel: false
//       }}
//     >
//       <Marker position={{ lat: 33.4484, lng: -73.985428 }} />
//     </GoogleMap>
//   ))
// );

// class GoogleMaps extends Component {
//   render() {
//     return (
//       <div className="main-content">
//         <Grid fluid>
//           <Row>
//             <Col md={12}>
//               <MapCard
//                 title="Regular Map"
//                 content={
//                   <RegularMap
//                     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE"
//                     loadingElement={<div style={{ height: `100%` }} />}
//                     containerElement={<div style={{ height: `280px` }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                   />
//                 }
//               />
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     );
//   }
// }
// export default GoogleMaps;
