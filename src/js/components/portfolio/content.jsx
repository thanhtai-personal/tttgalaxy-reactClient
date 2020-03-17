// import React, { PureComponent } from "react";

// import {
//   renderSection,
//   renderModalConfirm
// } from './../../helper'

// // import { RENDER_TYPE } from './../../constants/enums'

// import _ from 'lodash'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
// // import $ from 'jquery'

// import './portfolio.scss'
// import { RENDER_TYPE } from "../../constants/enums";


// class Content extends PureComponent {
//   constructor (props) {
//     super(props)
//     this.buildSection = this.buildSection.bind(this)
//     this.renderSection = renderSection.bind(this)
//     this.revertData = this.revertData.bind(this)
//     this.exportPdf = this.exportPdf.bind(this)
//     this.renderRadioButton = this.renderRadioButton.bind(this)
//     this.state = {
//       openEditMode: false,
//       exportingPdf: false,
//       imageUrlNull: _.isNil(props.profileImageUrl) || props.profileImageUrl === ''
//     }
//   }

//   onChangeBasicInfo (listParentSection, data, event) {
//     this.props.updateDataWithObjectKey('basicInfo', { ...data, value: data.type === 'date-picker' ? event : event.target.value, parentsSection: listParentSection })
//   }

//   onChangeEducation (listParentSection, data, event) {
//     this.props.updateDataWithObjectKey('education', { ...data, value: event.target.value, parentsSection: listParentSection })
//   }

//   onChangeExperience (listParentSection, data, event) {
//     this.props.updateDataWithObjectKey('experiences', { ...data, value: event.target.value, parentsSection: listParentSection })
//   }

//   onChangeSkill (listParentSection, data, event) {
//     this.props.updateDataWithObjectKey('skill', { ...data, value: event.target.value, parentsSection: listParentSection })
//   }

//   onRemoveBasicInfo (listParentSection, data) {
//     this.props.updateDataWithObjectKey('basicInfo', { ...data, parentsSection: listParentSection, isRemove: true })
//   }

//   onRemoveEducation (listParentSection, data) {
//     this.props.updateDataWithObjectKey('education', { ...data, parentsSection: listParentSection, isRemove: true })
//   }

//   onRemoveExperience (listParentSection, data) {
//     this.props.updateDataWithObjectKey('experiences', { ...data, parentsSection: listParentSection, isRemove: true })
//   }

//   onRemoveSkill (listParentSection, data) {
//     this.props.updateDataWithObjectKey('skill', { ...data, parentsSection: listParentSection, isRemove: true })
//   }

//   onRemoveSubData (listParentSection) {
//     this.props.updateDataWithObjectKey('skill', { parentsSection: listParentSection, isRemoveSub: true })
//   }

//   onAddSection (key, listParentSection, data) {
//     this.props.updateDataWithObjectKey(key, { ...data, parentsSection: listParentSection })
//   }

//   buildSection (data, htmlEvent) {
//     let { state: { openEditMode } } = this
//     const renderListSection = (sectionList, listParentSection, isRoot = true) => {
//       sectionList = sectionList.filter((sect) => sect.isDelete !== true)
//       return sectionList.map((section) => {
//         if (isRoot) {
//           listParentSection = []
//         }
//         if (!_.isNil(section.subData)) {
//           listParentSection.push(section.id)
//           return (
//             <React.Fragment key={`${section.name}-data-${section.id}`}>
//               <div className={`row ${section.isBorderTop ? `border-top ${openEditMode ? "margin-top-30" : ""}` : ""}`}>
//                 <div className="col-sm-1">
//                 </div>
//                 <div className="col-sm-3">
//                   <p>
//                     {openEditMode ?
//                       <input
//                         placeholder="example: Front End"
//                         defaultValue={section.name}
//                         onBlur={typeof htmlEvent.onChange === "function" ?
//                           htmlEvent.onChange.bind(null, [], { path: 'name', sectionId: section.id }) : () => { }}
//                       />
//                       : <b>{section.name}</b>
//                     }</p>
//                 </div>
//                 <div className="col-sm-8">
//                 </div>
//               </div>
//               {renderListSection(section.subData, JSON.parse(JSON.stringify(listParentSection)), false)}
//               {openEditMode &&
//                 <div className="btn-remove float-left">
//                   <i className="fas fa-minus-square cursor-pointer"
//                     title="remove skill group"
//                     onClick={typeof htmlEvent.onRemoveSubData === "function" ?
//                       htmlEvent.onRemoveSubData.bind(null, JSON.parse(JSON.stringify(listParentSection))) : () => { }}
//                   />
//                   <i className="fas fa-plus-square cursor-pointer"
//                     title="add new skill"
//                     onClick={typeof htmlEvent.onAddSection === "function" ?
//                       htmlEvent.onAddSection.bind(null, JSON.parse(JSON.stringify(listParentSection)), { isAddSection: true, renderType: RENDER_TYPE.ProgessBar, isMissName: false }) : () => { }}
//                   />
//                 </div>}
//             </React.Fragment>
//           )
//         }
//         return this.renderSection(section, this.state.openEditMode,
//           {
//             onChange: htmlEvent.onChange.bind(null, listParentSection),
//             onRemove: htmlEvent.onRemove.bind(null, listParentSection)
//           })
//       })
//     }
//     return renderListSection(data)
//   }

//   cancelEditMode () {
//     this.setState({ openEditMode: false }, () => {
//       this.revertData(_.clone(this.backUpData))
//     })
//   }

//   revertData (dataBackup) {
//     Object.keys(dataBackup).forEach((key) => {
//       this.props.updateData(key, dataBackup[key])
//     })
//   }

//   onSubmit () {
//     this.props.validateDataUpdate()
//       .then((dataValidate) => {
//         this.props.submitDataUpdate()
//         this.setState({ openEditMode: false })
//       })
//       .catch((errorValidate) => {
//         window.alert(errorValidate.errorMessage || errorValidate.message)
//       })
//   }

//   exportPdf = async () => {
//     const { props: { experiences, education, profileImageUrl } } = this
//     const basicInfoElement = document.getElementById('basic-info');
//     const skillsElement = document.getElementById('skills');
//     this.setState({ exportingPdf: true })
//     setTimeout(() => {
//       const pdf = new jsPDF();
//       pdf.setFontSize(20);
//       pdf.setFontType("bold")
//       pdf.text(60, 25, "CURRICULUM VITAE");
//       let currentY = 45
//       try {
//         let profileImage = new Image()
//         let pdfWidth = pdf.internal.pageSize.getWidth() - 20 //canh le 10
//         profileImage.src = profileImageUrl
//         let imageProfileWidth = pdfWidth / 10 + 2
//         let imageProfileHeight = profileImage.width ? profileImage.height / profileImage.width * imageProfileWidth : 0
//         if (imageProfileHeight) {
//           try {
//             pdf.addImage(profileImage, 'JPEG', 10, 45, imageProfileWidth, imageProfileHeight)
//             currentY = 45 + imageProfileHeight
//           } catch (error) {
//             window.alert('error while render image', error.message)
//             this.setState({ exportingPdf: false })
//           }
//           html2canvas(basicInfoElement)
//             .then((basicInfoCanvas) => {
//               let basicInfoWidth = pdfWidth / 10 * 4
//               let basicInfoHeight = basicInfoCanvas.height / basicInfoCanvas.width * basicInfoWidth
//               let basicInfoPos = { x: 40, y: 45, w: basicInfoWidth, h: basicInfoHeight }
//               pdf.addImage(basicInfoCanvas, 'JPEG', basicInfoPos.x, basicInfoPos.y, basicInfoPos.w, basicInfoPos.h)
//               if (45 + basicInfoHeight > currentY) {
//                 currentY = 45 + basicInfoHeight
//               }
//               let checkCurrentY = (pdfDoc, _currentY, cardHeight) => {
//                 if (_currentY + cardHeight > pdfDoc.internal.pageSize.getHeight()) {
//                   pdfDoc.addPage();
//                   return 15
//                 }
//                 return _currentY
//               }

//               const renderListCanvas = (pdfDoc, listGetCanvasfunc, _currentY) => {
//                 return new Promise((resolve, reject) => {
//                   Promise.all(listGetCanvasfunc)
//                     .then((listCanvas) => {
//                       if ((_.isNil(listCanvas) && _.isEmpty(listCanvas)) || listCanvas.length === 1) return resolve(_currentY)
//                       let rsCurrentY = _currentY, cardHeight = 0
//                       listCanvas.forEach((canvas, index) => {
//                         if (index === 0) {
//                           rsCurrentY = rsCurrentY + 10
//                         }
//                         cardHeight = canvas.height / canvas.width * pdfWidth
//                         rsCurrentY = checkCurrentY(pdfDoc, rsCurrentY, cardHeight)

//                         let cardPos = { x: 10, y: rsCurrentY, w: pdfWidth, h: cardHeight }
//                         pdf.addImage(canvas, 'JPEG', cardPos.x, cardPos.y, cardPos.w, cardPos.h)
//                         rsCurrentY = rsCurrentY + cardHeight
//                         if (index === 0) {
//                           rsCurrentY = rsCurrentY + 5
//                         }
//                       })
//                       resolve(rsCurrentY)
//                     })
//                     .catch((error) => {
//                       window.alert('error while render card', error.message)
//                       this.setState({ exportingPdf: false })
//                       reject(_currentY)
//                     })
//                 })
//               }
//               if (!_.isNil(skillsElement)) {
//                 try {
//                   html2canvas(skillsElement)
//                     .then((skillsCanvas) => {
//                       let skillWidth = pdfWidth / 10 * 4
//                       let skillHeight = skillsCanvas.height / skillsCanvas.width * skillWidth
//                       let skillPos = { x: 125, y: 45, w: skillWidth, h: skillHeight }
//                       pdf.addImage(skillsCanvas, 'JPEG', skillPos.x, skillPos.y, skillPos.w, skillPos.h)
//                       if (40 + skillPos.h > currentY) {
//                         currentY = 45 + skillPos.h
//                       }
//                       currentY = checkCurrentY(pdf, currentY);
//                       if (!_.isNil(experiences) && !_.isEmpty(experiences)) {
//                         let listGetExpCanvas = [html2canvas(document.getElementById("experience-title"))]
//                         experiences.forEach((exp) => {
//                           listGetExpCanvas.push(html2canvas(document.getElementById(`card-${exp.id}`)))
//                         })
//                         renderListCanvas(pdf, listGetExpCanvas, currentY)
//                           .then((_currentY) => {
//                             currentY = _currentY
//                             if (!_.isNil(education) && !_.isEmpty(education)) {
//                               let listGetEduCanvas = [html2canvas(document.getElementById("education-title"))]
//                               education.forEach((edu) => {
//                                 listGetEduCanvas.push(html2canvas(document.getElementById(`card-${edu.id}`)))
//                               })
//                               renderListCanvas(pdf, listGetEduCanvas, currentY)
//                                 .then((__currentY) => {
//                                   currentY = __currentY
//                                   pdf.save("cv.pdf")
//                                   this.setState({ exportingPdf: false })
//                                 })
//                                 .catch(__currentY => {
//                                   window.alert('error while exporting PDF', __currentY)
//                                   this.setState({ exportingPdf: false })
//                                 })
//                             } else {
//                               pdf.save("cv.pdf")
//                               this.setState({ exportingPdf: false })
//                             }
//                           })
//                           .catch((_currentY) => {
//                             window.alert('error while exporting PDF', _currentY)
//                             this.setState({ exportingPdf: false })
//                           })
//                       } else {
//                         pdf.save("cv.pdf")
//                         this.setState({ exportingPdf: false })
//                       }
//                     })
//                     .catch(error => {
//                       window.alert('error while exporting PDF', error.message)
//                       this.setState({ exportingPdf: false })
//                     })
//                 } catch (error) {
//                   window.alert('error while exporting PDF', error.message)
//                   this.setState({ exportingPdf: false })
//                 }

//               } else {
//                 pdf.save('cv.pdf')
//                 this.setState({ exportingPdf: false })
//               }
//             })
//             .catch((error) => {
//               window.alert('error while exporting PDF', error.message)
//               this.setState({ exportingPdf: false })
//             })
//         }
//       } catch (error) {
//         window.alert('error while exporting PDF', error.message)
//         this.setState({ exportingPdf: false })
//       }
//     }, 3000)
//   }

//   renderRadioButton (data, functions) {
//     return (
//       <button className="btn btn-edit no-opacity" disabled={true}>
//         <label className="switch btn-edit" title={data.title}>
//           <input type="checkbox" checked={data.value} disabled={data.disabled}
//             onChange={typeof functions.onClick === 'function' ? functions.onClick : () => { }}
//           />
//           <span className="slider round"></span>
//         </label>
//         {
//           data.labelLink ? <a className="link" onClick={typeof functions.onClickLabel === 'function' ? functions.onClickLabel : () => { }}>
//             <span className="padding-right-10 btn-edit">{data.label}</span>
//           </a>
//           :
//           <span className="padding-right-10 btn-edit">{data.label}</span>
//         }
//       </button>
//     )
//   }

//   render () {
//     let { props: { skill, basicInfo, experiences, education, profileImageUrl, publicProfile, paramPublicKey, publicKey, loading },
//       renderRadioButton,
//       buildSection,
//       onChangeBasicInfo,
//       onChangeEducation,
//       onChangeExperience,
//       onChangeSkill,
//       onRemoveBasicInfo,
//       onRemoveEducation,
//       onRemoveExperience,
//       onRemoveSkill,
//       onRemoveSubData,
//       onAddSection,
//       onSubmit,
//       cancelEditMode,
//       exportPdf,
//       state: {
//         openEditMode,
//         exportingPdf,
//         imageUrlNull
//       }
//     } = this;
//     if (loading) return (<div className="loading">data loading...</div>)
//     if (!publicProfile && !_.isNil(paramPublicKey)) return (<div className="loading">User does not public profile</div>)
//     return (
//       <div className="content container portfolio-content portfolio-view" style={{ paddingBottom: '100px' }}>
//         <div className="row">
//           <div className="col-sm-12">
//             <div className="banner"></div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-12">
//             <div className="admin-menu">
//               <div className="btn-group-vertical btn-edit">
//                 {_.isNil(paramPublicKey) && renderRadioButton({
//                   title: 'Open edit mode',
//                   label: 'Edit Mode:',
//                   value: openEditMode,
//                   disabled: openEditMode
//                 }, {
//                     onClick: () => {
//                       this.setState({ openEditMode: true, imageUrlNull: _.isNil(profileImageUrl) || profileImageUrl === '' }, () => {
//                         this.backUpData = {
//                           skill: JSON.parse(JSON.stringify(skill)),
//                           basicInfo: JSON.parse(JSON.stringify(basicInfo)),
//                           experiences: JSON.parse(JSON.stringify(experiences)),
//                           education: JSON.parse(JSON.stringify(education)),
//                           profileImageUrl: profileImageUrl,
//                         }
//                       })
//                     }
//                   }
//                 )}
//                 {_.isNil(paramPublicKey) && renderRadioButton({
//                   title: 'Open public profile',
//                   label: 'Public profile:',
//                   labelLink: publicProfile,
//                   value: publicProfile,
//                   disabled: false
//                 }, {
//                     onClick: () => {
//                       this.props.updateData('publicProfile', !publicProfile)
//                     },
//                     onClickLabel: () => {
//                       window.open(`${window.location.origin}/portfolio/public/${publicKey}`,'_blank');
//                     }
//                   }
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         {openEditMode &&
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="admin-menu">
//                 <input type="button" className="btn btn-info btn-save" value="Save"
//                   disabled={imageUrlNull}
//                   onClick={onSubmit.bind(this)}
//                 />
//                 <input type="button" className="btn btn-secondary btn-cancel" value="Cancel" data-toggle="modal" data-target="#confirm-cancel"
//                 />
//               </div>
//             </div>
//           </div>
//         }
//         {!openEditMode &&
//           <div className="row">
//             <div className="col-sm-12">
//               <button className="btn btn-primary btn-info btn-save"
//                 onClick={exportPdf.bind(this)}
//               >
//                 {exportingPdf && <span className="spinner-border spinner-border-sm"></span>}
//                 {exportingPdf ? "exporting your PDF" : "export PDF file"}
//               </button>
//             </div>
//           </div>
//         }
//         <div className="row">
//           <div className="col-sm-3" id="image-profile">
//             <div className="image-profile-wrapper">
//               <img className="image-profile margin-center"
//                 src={profileImageUrl || 'https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149'}
//                 alt="profile" />
//             </div>
//             {openEditMode &&
//               <div className="edit-image-area">
//                 <input
//                   className={`edit-image ${imageUrlNull ? 'error' : ''}`}
//                   placeholder="Enter your image url"
//                   defaultValue={profileImageUrl}
//                   onBlur={(e) => {
//                     if (_.isNil(e.target.value) || e.target.value === "") {
//                       this.setState({ imageUrlNull: true })
//                     } else {
//                       this.setState({ imageUrlNull: false })
//                     }
//                     this.props.updateData('profileImageUrl', e.target.value)
//                   }
//                   }
//                 />
//               </div>}
//           </div>
//           <div className="col-sm-4 basic-infomation" id="basic-info">
//             <div className="row"><div className="col-sm-12 title"> BASIC INFO </div></div>
//             {buildSection(basicInfo, { onChange: onChangeBasicInfo.bind(this), onRemove: onRemoveBasicInfo.bind(this) })}
//             {/* {openEditMode &&
//               <i className="fas fa-plus-square cursor-pointer float-right"
//                 title="add new info"
//                 onClick={onAddSection.bind(this, 'basicInfo', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.TextWithLabel, isMissName: false })}
//               />
//             } */}
//           </div>
//           <div className="col-sm-5 skills" id="skills">
//             <div className="row"><div className="col-sm-12 title"> SKILLS </div></div>
//             {buildSection(skill, {
//               onChange: onChangeSkill.bind(this),
//               onRemove: onRemoveSkill.bind(this),
//               onRemoveSubData: onRemoveSubData.bind(this),
//               onAddSection: onAddSection.bind(this, 'skill')
//             })}
//             {openEditMode &&
//               <i className="fas fa-plus-square cursor-pointer float-right"
//                 title="add new group of skills"
//                 onClick={onAddSection.bind(this, 'skill', [], { isAddToRoot: true, isAddSection: true, isAddSubData: true, renderType: RENDER_TYPE.Title, isMissName: true })}
//               />
//             }
//           </div>
//         </div>
//         <div id="experience">
//           <div className="row padding-top-15">
//             <div className="col-sm-12">
//               <div className="title center" id="experience-title">
//                 EXPERIENCES
//               </div>
//             </div>
//           </div>
//           {buildSection(experiences, { onChange: onChangeExperience.bind(this), onRemove: onRemoveExperience.bind(this) })}
//         </div>
//         {openEditMode &&
//           <i className="fas fa-plus-square cursor-pointer"
//             title="add new experience card"
//             onClick={onAddSection.bind(this, 'experiences', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.CardFullWidth, isMissName: true })}
//           />
//         }
//         <div id="education">
//           <div className="row padding-top-15">
//             <div className="col-sm-12">
//               <div className="title center" id="education-title">
//                 EDUCATION
//               </div>
//             </div>
//           </div>
//           {buildSection(education, { onChange: onChangeEducation.bind(this), onRemove: onRemoveEducation.bind(this) })}
//         </div>
//         {openEditMode &&
//           <i className="fas fa-plus-square cursor-pointer"
//             title="add new education card"
//             onClick={onAddSection.bind(this, 'education', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.CardFullWidth, isMissName: true })}
//           />
//         }
//         {renderModalConfirm({
//           id: 'confirm-cancel', title: 'Confirm cancel', content: 'Updated data will be unsaved. Do you want to cancel',
//           onConfirm: cancelEditMode.bind(this)
//         })}
//       </div>
//     )
//   }
// }

// export default Content