import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="container" style={{ height: "70vh", paddingTop: "100px" }}>

                <div className="row">
                    <div className="col-12">
                        <h1> Difference between authorization and authentication</h1>
                        <p>In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person's or user's authorities are checked for accessing the resources. </p>
                        <h1> Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <p>We are using fire base for authentication and authorization. We can also use firebase  live database to store data. Other option implement authentication are Auth0, Amazon Cognito etc</p>
                        <h1>What other services does firebase provide other than authentication</h1>
                        <p>Firebase provide live database, cloude storage, Hosting, Cloud, Storage Google ,Analytics,Predictions,Cloud Messaging </p>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Blog;