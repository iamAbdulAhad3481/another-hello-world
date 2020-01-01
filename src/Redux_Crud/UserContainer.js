import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/User/UserActions'
import DisplayUsers from './DisplayUsers'
import { Component } from '@fullcalendar/core'

function UserContainer({ fetchUser, userData }) {

  useEffect(() => {
    fetchUser()
  }, [])
  
  return (
    <>
      {userData.loading && <h2>Loading</h2>}
      {userData.error && <h2>Error</h2>}
      {userData.users && <DisplayUsers users={userData.users} />}
    </>
  )
}
const mapStateToProps = state => {
  return {
    userData: state.user
  }

}
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
