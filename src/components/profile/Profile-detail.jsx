import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {userDetailRequestAction} from '../../store/auth/action'

class ProfileDetail extends Component {
   componentDidMount() {
      this.props.userDetailRequestAction(
         parseInt(localStorage.getItem('userId'))
      );
   }

   render() {
      const userName = localStorage.getItem('userName');
      const {userDetailData} = this.props;

      return (
         <Fragment>
            <h1>{userName} Profile </h1>

            {userDetailData && (
               <div>
                  <p>Город - {userDetailData.city}</p>
                  <p>
                     Знание языков - {
                     userDetailData.languages.map(item => <span>{item} </span>)
                  }
                  </p>
                  <p>
                     Ссылки:
                     {
                        userDetailData.social.map(item =>
                           <p>
                              <a style={{textDecoration: 'none'}} href={item.link} target="_blank"
                                 rel="noopener noreferrer"> { item.label } <i className={`fa fa-${item.label}`} aria-hidden="true"/> </a>
                           </p>
                        )
                     }
                  </p>
               </div>
            )}
         </Fragment>
      )
   }
}

const mapStateToProps = state => ({
   userData: state.authReducer.userData,
   userDetailData: state.authReducer.userDetailData,
   loading: state.authReducer.loading
});

const mapDispatchToProps = {
   userDetailRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);