"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[497],{5497:function(e,n,t){t.r(n);var a=t(1413),r=t(2982),i=t(885),l=t(2791),o=t(6871),u=t(7391),s=t(4925),c=t(9891),d=t(8096),p=t(3926),m=t(8070),h=t(1001),g=t(362),v=t(7247),f=t(75),Z=t(7450),j=t(9697),x=t(6907),y=t(1222),b=t(8193),_=t(184);n.default=function(){var e=(0,o.UO)().id,n=(0,o.s0)(),t=(0,l.useContext)(y.S),C=(0,l.useState)(b.ir),k=(0,i.Z)(C,2),N=k[0],S=k[1],w=(0,l.useState)([]),P=(0,i.Z)(w,2),B=P[0],F=P[1],R=(0,l.useState)(b.vM),J=(0,i.Z)(R,2),W=J[0],T=J[1],M=(0,l.useState)([]),L=(0,i.Z)(M,2),O=L[0],q=L[1],G=(0,l.useState)([]),I=(0,i.Z)(G,2),A=I[0],K=I[1],U=(0,l.useState)([]),V=(0,i.Z)(U,2),D=V[0],E=V[1],H=(0,l.useState)([]),z=(0,i.Z)(H,2),Q=z[0],X=z[1],Y=(0,l.useState)(!1),$=(0,i.Z)(Y,2),ee=$[0],ne=$[1],te=(0,l.useState)(!1),ae=(0,i.Z)(te,2),re=ae[0],ie=ae[1],le=(0,l.useState)(""),oe=(0,i.Z)(le,2),ue=oe[0],se=oe[1],ce=(0,l.useState)(""),de=(0,i.Z)(ce,2),pe=de[0],me=de[1],he=(0,l.useState)(!1),ge=(0,i.Z)(he,2),ve=ge[0],fe=ge[1],Ze=(0,l.useState)(!0),je=(0,i.Z)(Ze,2),xe=je[0],ye=je[1];(0,l.useEffect)((function(){if(t.loaded){var a=t.data.listings.find((function(n){return n._id===e}));a||n("/404"),a&&(S(a),F(null===a||void 0===a?void 0:a.otherFeatures),T(null===a||void 0===a?void 0:a.furnishingDetails),a.facilities.forEach((function(e){return q((function(n){return[].concat((0,r.Z)(n),[JSON.stringify(e)])}))})),ye(!1))}}),[e,t.loaded,t.update]);var be=new FormData,_e=function(e,n,a){return function(r){(0,Z.Z)("/listings/delete-file/".concat(e,"/").concat(n,"/").concat(a)).then((function(e){t.setUpdate(!0)}))}},Ce=function(e,n,t){e&&!O.includes(JSON.stringify({title:n,icon:t}))?q((function(e){return[].concat((0,r.Z)(e),[JSON.stringify({title:n,icon:t})])})):q((function(e){return e.filter((function(e){return JSON.parse(e).title!==n}))}))},ke=function(e){return O.some((function(n){return JSON.parse(n).title===e}))};return(0,_.jsxs)("section",{children:[(0,_.jsxs)(x.ql,{children:[(0,_.jsx)("title",{children:"Update Pending Listing | Shri Property"}),(0,_.jsx)("link",{rel:"canonical",href:"https://shriproperty.com/account/pending-listings/"}),(0,_.jsx)("meta",{name:"description",content:"Update your pending Listing"})]}),xe?(0,_.jsx)(g.Z,{fullScreen:!0}):(0,_.jsxs)("form",{onSubmit:function(t){for(var a in t.preventDefault(),fe(!0),N)"_id"!==a&&"__v"!==a&&"otherFeatures"!==a&&"facilities"!==a&&"furnishingDetails"!==a&&be.append(a,N[a]);for(var r in A)be.append("images",A[r]);for(var i in D)be.append("videos",D[i]);for(var l in Q)be.append("documents",Q[l]);for(var o in B)be.append("otherFeatures",B[o]);for(var u in be.append("furnishingDetails",JSON.stringify(W||{})),O)be.append("facilities",O[u]);(0,f.s)("/listings/update/".concat(e),be).then((function(e){fe(!1),e.success?(ne(!0),se(e.message),n("/account")):(ie(!0),me(e.message))}))},className:"admin-property-form",children:[(0,_.jsx)(h.ik,{title:ue,open:ee,setOpen:ne}),(0,_.jsx)(h.rt,{title:pe,open:re,setOpen:ie}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Title",value:N.title,fullWidth:!0,required:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{title:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Description",value:N.description,fullWidth:!0,required:!0,multiline:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{description:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Address",value:N.address,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{address:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Locality",value:N.locality,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{locality:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Location",value:N.location,helperText:"Paste google maps url here",fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{location:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Owner",value:N.owner,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{owner:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Commission",value:N.commission,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{commission:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Owner Contact",value:N.ownerContact,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{ownerContact:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Other Features",helperText:"Separate with enter",value:B.join("\n"),fullWidth:!0,multiline:!0,onChange:function(e){return F(e.target.value.split("\n"))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Price",type:"number",value:N.price,required:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{price:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Special Price",type:"number",value:N.specialPrice,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{specialPrice:e.target.value}))}}),(0,_.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,_.jsx)(s.Z,{children:"Type"}),(0,_.jsxs)(p.Z,{required:!0,label:"Type",value:N.type,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{type:e.target.value}))},children:[(0,_.jsx)(c.Z,{value:"Rental",children:"Rental"}),(0,_.jsx)(c.Z,{value:"Sale",children:"Sale"}),(0,_.jsx)(c.Z,{value:"PG",children:"PG"})]})]}),("Rental"===N.type||"PG"===N.type)&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Security",value:N.security,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{security:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Maintenance",value:N.maintenance,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{maintenance:e.target.value}))}})]}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Size",type:"number",value:N.size,required:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{size:e.target.value}))}}),(0,_.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,_.jsx)(s.Z,{children:"Unit"}),(0,_.jsxs)(p.Z,{required:!0,label:"Unit",value:N.unit,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{unit:e.target.value}))},children:[(0,_.jsx)(c.Z,{value:"Sq. Ft.",children:"Sq. Ft"}),(0,_.jsx)(c.Z,{value:"Acre",children:"Acre"}),(0,_.jsx)(c.Z,{value:"Gaj",children:"Gaj"}),(0,_.jsx)(c.Z,{value:"Marla",children:"Marla"}),(0,_.jsx)(c.Z,{value:"Bigha",children:"Bigha"}),(0,_.jsx)(c.Z,{value:"Bigha-Pucca",children:"Bigha-Pucca"}),(0,_.jsx)(c.Z,{value:"Bigha-Kachha",children:"Bigha-Kachha"}),(0,_.jsx)(c.Z,{value:"Bigha-Kachha",children:"Bigha-Kachha"}),(0,_.jsx)(c.Z,{value:"Biswa",children:"Biswa"}),(0,_.jsx)(c.Z,{value:"Biswa",children:"Biswa"}),(0,_.jsx)(c.Z,{value:"Biswa-Pucca",children:"Biswa-Pucca"}),(0,_.jsx)(c.Z,{value:"Kanal",children:"Kanal"}),(0,_.jsx)(c.Z,{value:"Killa",children:"Killa"}),(0,_.jsx)(c.Z,{value:"Kattha",children:"Kattha"}),(0,_.jsx)(c.Z,{value:"Ghumaon",children:"Ghumaon"})]})]}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Floor",value:N.floor,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{floor:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Bedrooms",type:"number",value:N.bedroom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{bedroom:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Bathroom",type:"number",value:N.bathroom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{bathroom:e.target.value}))}}),("Rental"===N.type||"Sale"===N.type)&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Living Room",type:"number",value:N.livingRoom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{livingRoom:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Lobby",type:"number",value:N.lobby,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{lobby:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Dinning Room",type:"number",value:N.dinningRoom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{dinningRoom:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Store Room",type:"number",value:N.store,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{store:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Pooja Room",type:"number",value:N.poojaRoom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{poojaRoom:e.target.value}))}})]}),"Sale"===N.type&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Property Age",value:N.age,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{age:e.target.value}))}})}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Kitchen",type:"number",value:N.kitchen,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{kitchen:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Open Parking",type:"number",value:N.openParking,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{openParking:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Covered Parking",type:"number",value:N.closeParking,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{closeParking:e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Balcony",type:"number",value:N.balcony,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{balcony:e.target.value}))}}),(0,_.jsx)("br",{}),(0,_.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,_.jsx)(s.Z,{children:"category"}),(0,_.jsxs)(p.Z,{required:!0,label:"category",value:N.category,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{category:e.target.value}))},children:[(0,_.jsx)(c.Z,{value:"Residential Apartment",children:"Residential Apartment"}),(0,_.jsx)(c.Z,{value:"Independent House/Villa",children:"Independent House/Villa"}),(0,_.jsx)(c.Z,{value:"Plot",children:"Plot"}),(0,_.jsx)(c.Z,{value:"Commercial Office",children:"Commercial Office"}),(0,_.jsx)(c.Z,{value:"Commercial Office",children:"Commercial Plot"}),(0,_.jsx)(c.Z,{value:"Serviced Apartments",children:"Serviced Apartments"}),(0,_.jsx)(c.Z,{value:"1 RK/ Studio Apartment",children:"1 RK/ Studio Apartment"}),(0,_.jsx)(c.Z,{value:"Independent/Builder Floor",children:"Independent/Builder Floor"}),(0,_.jsx)(c.Z,{value:"Other",children:"Other"})]})]}),(0,_.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,_.jsx)(s.Z,{children:"Status"}),(0,_.jsxs)(p.Z,{required:!0,label:"Status",value:N.status,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{status:e.target.value}))},children:[(0,_.jsx)(c.Z,{value:"Unfurnished",children:"Unfurnished"}),(0,_.jsx)(c.Z,{value:"Semifurnished",children:"Semifurnished"}),(0,_.jsx)(c.Z,{value:"Furnished",children:"Furnished"})]})]}),(0,_.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,_.jsx)(s.Z,{children:"Direction"}),(0,_.jsxs)(p.Z,{required:!0,label:"Direction",value:N.direction,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{direction:e.target.value}))},children:[(0,_.jsx)(c.Z,{value:"North",children:"North"}),(0,_.jsx)(c.Z,{value:"South",children:"South"}),(0,_.jsx)(c.Z,{value:"East",children:"East"}),(0,_.jsx)(c.Z,{value:"West",children:"West"}),(0,_.jsx)(c.Z,{value:"North-East",children:"North-East"}),(0,_.jsx)(c.Z,{value:"North-West",children:"North-West"}),(0,_.jsx)(c.Z,{value:"South-East",children:"South-East"}),(0,_.jsx)(c.Z,{value:"South-West",children:"South-West"})]})]}),"Sale"===N.type&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,_.jsx)(s.Z,{children:"Purchase Type"}),(0,_.jsxs)(p.Z,{required:!0,label:"Purchase Type",value:N.purchaseType,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{purchaseType:e.target.value}))},children:[(0,_.jsx)(c.Z,{value:"New Booking",children:"New Booking"}),(0,_.jsx)(c.Z,{value:"Resale",children:"Resale"})]})]}),(0,_.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,_.jsx)(s.Z,{children:"Construction Status"}),(0,_.jsxs)(p.Z,{required:!0,label:"Construction Status",value:N.constructionStatus,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{constructionStatus:e.target.value}))},children:[(0,_.jsx)(c.Z,{value:"Under Construction",children:"Under Construction"}),(0,_.jsx)(c.Z,{value:"Ready to Move",children:"Ready to Move"})]})]})]}),("Sale"===N.type||"Rental"===N.type)&&(0,_.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,_.jsx)(s.Z,{children:"Possession"}),(0,_.jsxs)(p.Z,{required:!0,label:"Possession",value:N.possession,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{possession:e.target.value}))},children:[(0,_.jsx)(c.Z,{value:"Immediate",children:"Immediate"}),(0,_.jsx)(c.Z,{value:"Between 1 Month",children:"Between 1 Month"}),(0,_.jsx)(c.Z,{value:"Between 2 Month",children:"Between 2 Month"}),(0,_.jsx)(c.Z,{value:"Between 3 Month",children:"Between 3 Month"}),(0,_.jsx)(c.Z,{value:"Between 6 Months",children:"Between 6 Months"}),(0,_.jsx)(c.Z,{value:"2023",children:"2023"}),(0,_.jsx)(c.Z,{value:"2024",children:"2024"}),(0,_.jsx)(c.Z,{value:"2025",children:"2025"}),(0,_.jsx)(c.Z,{value:"2026",children:"2026"}),(0,_.jsx)(c.Z,{value:"2027",children:"2027"}),(0,_.jsx)(c.Z,{value:"2028",children:"2028"}),(0,_.jsx)(c.Z,{value:"2029",children:"2029"}),(0,_.jsx)(c.Z,{value:"2030",children:"2030"})]})]}),("Furnished"===N.status||"Semifurnished"===N.status)&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{children:"Add Furnishing Details (Add amount of things eg:- fans = 5)"}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"AC",type:"number",value:W.ac,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{ac:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"stove",type:"number",value:W.stove,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{stove:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Modular Kitchen",type:"number",value:W.modularKitchen,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{modularKitchen:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Fans",type:"number",value:W.fans,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{fans:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Fridge",type:"number",value:W.fridge,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{fridge:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Light",type:"number",value:W.light,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{light:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Bed",type:"number",value:W.beds,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{beds:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"microwave",type:"number",value:W.microwave,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{microwave:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"dinning table",type:"number",value:W.dinningTable,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{dinningTable:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"TV",type:"number",value:W.tv,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{tv:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Dressing Table",type:"number",value:W.dressingTable,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{dressingTable:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"TV Wall Panel",type:"number",value:W.tvWallPanel,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{tvWallPanel:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"wardrobe",type:"number",value:W.wardrobe,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{wardrobe:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"washing machine",type:"number",value:W.washingMachine,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{washingMachine:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Geyser",type:"number",value:W.geyser,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{geyser:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Curtains",type:"number",value:W.curtains,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{curtains:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Sofa",type:"number",value:W.sofa,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{sofa:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"water purifier",type:"number",value:W.waterPurifier,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{waterPurifier:+e.target.value}))}}),(0,_.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Exhaust",type:"number",value:W.exhaust,onChange:function(e){return T((0,a.Z)((0,a.Z)({},W),{},{exhaust:+e.target.value}))}})]}),(0,_.jsx)("h1",{children:"Choose Facilities From The Following "}),(0,_.jsxs)("div",{className:"admin-property-form__facilities",children:[(0,_.jsx)(j.J,{label:"Fire/Security Alarm",checked:ke("Fire/Security Alarm"),onChange:function(e){return Ce(e.target.checked,"Fire/Security Alarm","alarm.png")}}),(0,_.jsx)(j.J,{label:"Power Backup",checked:ke("Power Backup"),onChange:function(e){return Ce(e.target.checked,"Power Backup","power-backup.png")}}),(0,_.jsx)(j.J,{label:"Intercome",checked:ke("Intercome"),onChange:function(e){return Ce(e.target.checked,"Intercome","intercome.png")}}),(0,_.jsx)(j.J,{label:"Lift",checked:ke("Lift"),onChange:function(e){return Ce(e.target.checked,"Lift","lift.png")}}),(0,_.jsx)(j.J,{label:"Maintenance Staff",checked:ke("Maintenance Staff"),onChange:function(e){return Ce(e.target.checked,"Maintenance Staff","maintenance.png")}}),(0,_.jsx)(j.J,{label:"Park",checked:ke("Park"),onChange:function(e){return Ce(e.target.checked,"Park","park.png")}}),(0,_.jsx)(j.J,{label:"Swimming Pool",checked:ke("Swimming Pool"),onChange:function(e){return Ce(e.target.checked,"Swimming Pool","swimming-pool.png")}}),(0,_.jsx)(j.J,{label:"Gym",checked:ke("Gym"),onChange:function(e){return Ce(e.target.checked,"Gym","gym.png")}}),(0,_.jsx)(j.J,{label:"Market",checked:ke("Market"),onChange:function(e){return Ce(e.target.checked,"Market","market.png")}}),(0,_.jsx)(j.J,{label:"Water Storage",checked:ke("Water Storage"),onChange:function(e){return Ce(e.target.checked,"Water Storage","water-tank.png")}}),(0,_.jsx)(j.J,{label:"Piped Gas",checked:ke("Piped Gas"),onChange:function(e){return Ce(e.target.checked,"Piped Gas","piped-gas.png")}}),(0,_.jsx)(j.J,{label:"Visitor Parking",checked:ke("Visitor Parking"),onChange:function(e){return Ce(e.target.checked,"Visitor Parking","parking.png")}}),(0,_.jsx)(j.J,{label:"Water supply 24/7",checked:ke("Water supply 24/7"),onChange:function(e){return Ce(e.target.checked,"Water supply 24/7","water.png")}}),(0,_.jsx)(j.J,{label:"Security Guard",checked:ke("Security Guard"),onChange:function(e){return Ce(e.target.checked,"Security Guard","security-guard.png")}}),(0,_.jsx)(j.J,{label:"CCTV",checked:ke("CCTV"),onChange:function(e){return Ce(e.target.checked,"CCTV","cctv.png")}}),(0,_.jsx)(j.J,{label:"Gated Society",checked:ke("Gated Society"),onChange:function(e){return Ce(e.target.checked,"Gated Society","gate.png")}}),(0,_.jsx)(j.J,{label:"Street Light",checked:ke("Street Light"),onChange:function(e){return Ce(e.target.checked,"Street Light","street-light.png")}}),(0,_.jsx)(j.J,{label:"WiFi",checked:ke("WiFi"),onChange:function(e){return Ce(e.target.checked,"WiFi","wifi.png")}}),(0,_.jsx)(j.J,{label:"Club House",checked:ke("Club House"),onChange:function(e){return Ce(e.target.checked,"Club House","club-house.png")}}),(0,_.jsx)(j.J,{label:"STP",checked:ke("STP"),onChange:function(e){return Ce(e.target.checked,"STP","STP.png")}}),(0,_.jsx)(j.J,{label:"Ceiling Light",checked:ke("Ceiling Light"),onChange:function(e){return Ce(e.target.checked,"Ceiling Light","ceiling-light.png")}})]}),(0,_.jsx)("h1",{children:"Images"}),N.images.length>0?N.images.map((function(e){return(0,_.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,_.jsx)("img",{className:"admin-property-form__preview",src:e.url,alt:"can't preview"}),(0,_.jsx)(m.I,{title:(0,_.jsx)(v.Z,{}),type:"button",onClick:_e(N._id,"images",e.key)})]},e.key)})):(0,_.jsx)("h1",{children:"there are no images"}),(0,_.jsx)("h1",{children:"Videos"}),N.videos.length>0?N.videos.map((function(e){return(0,_.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,_.jsx)("video",{controls:!0,autoPlay:!0,muted:!0,loop:!0,className:"admin-property-form__preview",children:(0,_.jsx)("source",{src:e.url,type:"video/mp4"})}),(0,_.jsx)(m.I,{title:(0,_.jsx)(v.Z,{}),type:"button",onClick:_e(N._id,"videos",e.key)})]},e.key)})):(0,_.jsx)("h1",{children:"there are no Videos"}),(0,_.jsx)("br",{}),(0,_.jsx)(m.t,{title:"Image",className:"admin-property-form__upload-btn",onChange:function(e){return K([].concat((0,r.Z)(A),(0,r.Z)(e.target.files)))},accept:"image/*"}),A.map((function(e,n){if(e instanceof File){var t=URL.createObjectURL(e);return(0,_.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,_.jsx)("img",{className:"admin-property-form__preview",src:t,alt:"can't preview"}),(0,_.jsx)(m.I,{title:(0,_.jsx)(v.Z,{}),onClick:function(){return K(A.filter((function(e,t){return t!==n})))}})]},n)}})),(0,_.jsx)("br",{}),(0,_.jsx)(m.t,{title:"Videos",className:"admin-property-form__upload-btn",onChange:function(e){return E([].concat((0,r.Z)(D),(0,r.Z)(e.target.files)))},accept:"video/*"}),D.map((function(e,n){if(e instanceof File){var t=URL.createObjectURL(e);return(0,_.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,_.jsx)("video",{controls:!0,autoPlay:!0,muted:!0,loop:!0,className:"admin-property-form__preview",children:(0,_.jsx)("source",{src:t,type:"video/mp4"})}),(0,_.jsx)(m.I,{title:(0,_.jsx)(v.Z,{}),onClick:function(){return E(D.filter((function(e,t){return t!==n})))}})]},n)}})),(0,_.jsx)("br",{}),(0,_.jsx)(m.t,{title:"Documents",className:"admin-property-form__upload-btn",onChange:function(e){return X([].concat((0,r.Z)(Q),(0,r.Z)(e.target.files)))},accept:"application/pdf"}),Q.map((function(e,n){if(e instanceof File){var t=URL.createObjectURL(e);return(0,_.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,_.jsx)("iframe",{src:t,title:t,height:"200",width:"300"}),(0,_.jsx)(m.I,{title:(0,_.jsx)(v.Z,{}),onClick:function(){return X(Q.filter((function(e,t){return t!==n})))}})]},n)}})),(0,_.jsx)("br",{}),(0,_.jsx)(m.I,{title:"Submit",className:"admin-property-form__submit-btn",type:"submit",loading:ve})]})]})}}}]);
//# sourceMappingURL=497.71dda3ea.chunk.js.map