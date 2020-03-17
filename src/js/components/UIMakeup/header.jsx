// import React from "react";
// // import "./header.scss";
// import { NavLink } from "react-router-dom"
// import { withEventEmitter } from './../../middleware/index'
// import { EVENT_EMITTER_COMMAND } from './../../constants/enums'
// import styled from 'styled-components'
// import { StyledHeader } from './headerStyled'

// const Promp = styled.input`
// width: 150px;
// color: lightblue;
// background: darkblue;
// opacity: 0.5;
// border-radius: 5px;
// padding-left: 8px;
// margin-left: 35px;
// `

// class Header extends React.PureComponent {
//   constructor (props) {
//     super(props)
//     this.onPrompKeydown = this.onPrompKeydown.bind(this)
//   }

//   onPrompKeydown = (e) => {
//     if (e.keyCode === 13) {
//       Object.keys(EVENT_EMITTER_COMMAND).forEach((key) => {
//         if (e.target.value === EVENT_EMITTER_COMMAND[key]) {
//           this.props.eventEmitter.emit('promp-action', e.target.value ? e.target.value.trim() : '')
//         }
//       })
//     }
//   }
//   render () {
//     const { name } = this.props
//     return (
//       <StyledHeader>
//         <div className={name}>
//           <div className="header-container">
//             <nav className="navbar navbar-expand-lg">
//               <NavLink className="navbar-brand" to="/">
//                 {name}
//               </NavLink>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNav">
//                 <Promp onKeyDown={this.onPrompKeydown} placeholder='Type an action' />
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="/home">
//                       Home
//                   </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="/about">
//                       About
//                   </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="/games">
//                       Games
//                   </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="/login">
//                       Login
//                   </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="/register">
//                       Register
//                   </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </StyledHeader>
//     )
//   }
// }

// export default withEventEmitter(Header);
