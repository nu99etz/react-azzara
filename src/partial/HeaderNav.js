import React from 'react';
import './azahra-css/css/azzara.min.css';
import './azahra-css/css/bootstrap.min.css';
import './azahra-css/css/font.css';

function HeaderNav() {
    return (
        <div classNameName="main-header" data-background-color="purple">
			{/* <!-- Logo Header --> */}
			<div classNameName="logo-header">
				
				<a href="index.html" className="logo">
					<img src="../assets/img/logoazzara.svg" alt="navbar brand" classNameName="navbar-brand" />
				</a>
				<button classNameName="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">
						<i className="fa fa-bars"></i>
					</span>
				</button>
				<button className="topbar-toggler more"><i className="fa fa-ellipsis-v"></i></button>
				<div className="navbar-minimize">
					<button className="btn btn-minimize btn-rounded">
						<i className="fa fa-bars"></i>
					</button>
				</div>
			</div>
			{/* <!-- End Logo Header --> */}
        </div>
        
    );
}

export default LogoHeader;