import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/User/UserActions'
import DisplayUsers from './DisplayUsers'

function UserContainer({ fetchUser, usersData }) {

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      {usersData.loading && <h2>Loading</h2>}
      {usersData.error && <h2>Error</h2>}
      {usersData.users && <DisplayUsers users={usersData.users} />}
    </>
  )
}
const mapStateToProps = state => {
  return {
    usersData: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
