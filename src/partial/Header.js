import './Package';


const Header = () => {
  return (
    <div className="main-header" data-background-color="purple">
      {/* <!-- Logo Header --> */}
      <div className="logo-header">

        <a href="index.html" className="logo">
          <img src="../assets/img/logoazzara.svg" alt="navbar brand" className="navbar-brand" />
        </a>
        <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
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

      <nav className="navbar navbar-header navbar-expand-lg">

        <div className="container-fluid">

        </div>

      </nav>

    </div>


  );
}

export default Header;