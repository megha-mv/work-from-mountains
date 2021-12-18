import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export default class LoginByGoogle extends Component {

    responseGoogle = (response) =>{
        console.log(response);
        console.log(response.profileObj);
    }

    render() {
        return (
            <div>
                <GoogleLogin 
                clientId="785414717726-bihb15vgpmt413jp4rdc1o43url2h07g.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                style={{
                width:50,
                height:50,
                }}
                />
            </div>
        )
    }
}
