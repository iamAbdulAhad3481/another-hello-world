import React from 'react'
import { connect } from 'react-redux'
import {buyIceCream} from '../Redux/IceCream/Actions'
 
function IceCreamContainer({ iceCreams,buyIceCream }) {
  return (
    <div>
      <button onClick={buyIceCream}>Number of IceCreams {iceCreams}</button>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    iceCreams: state.iceCream.numberofIceCreams
  }
}
const mapDispatchToProps = dispatch => {
  return{
    buyIceCream:()=>dispatch(buyIceCream())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
