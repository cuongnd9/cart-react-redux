import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/*Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="https://github.com/ndc07">DUCATI</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://github.com/ndc07">HOME
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/ndc07">MONSTER</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/ndc07">SCRAMBLER</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/ndc07">MULTISTRADA</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/ndc07">PANIGALE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/ndc07">SUPERSPORT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/ndc07">SERVICE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/ndc07">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*Page Content*/}
        <div className="container">

          <div className="row">

            <div className="col-lg-12">

              <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src="https://images.ctfassets.net/o6sr41tx16eu/4BhzxXmgvSMgg6oAAOE2CW/941a483ecfaa7501bfbd427479531274/Scrambler_Slider_1600.jpg" alt="Third slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="https://images.ctfassets.net/o6sr41tx16eu/2qEIHPeROwuIcqec2y8kUC/40a1f47eb0c533531fb81be97643ed7b/XDiavel-Matt-Liquid-Concrete-Grey-MY19-02-Hero-Banner-1600x1000.jpg" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="https://images.ctfassets.net/o6sr41tx16eu/1Cg3ycnv8EUaq4oSwwqQyg/b423330ca119d14718dcb5b9a5bdd61b/Monster-1200-25-Anniversario-MY19-Special-Livery-01-Hero-Banner-1600x1000.jpg" alt="First slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="row">

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="https://github.com/ndc07"><img className="card-img-top" src="http://images.ctfassets.net/o6sr41tx16eu/3LYwlGMCkwwIyQeOmaUg04/62d85640daa995211d666728fcffb793/Monster-797_MY18-White-01-Book-testride_630x390.jpg" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="https://github.com/ndc07">Monster 797</a>
                      </h4>
                      <h5>$9,295</h5>
                      <p className="card-text">The Monster 797 is the entrance to the Ducati world with its values, style, sophistication, and performance. It sporty, essential, easy to ride, but never intimidating — all you need to have undemanding fun.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="https://github.com/ndc07"><img className="card-img-top" src="http://images.ctfassets.net/o6sr41tx16eu/3Tm1FcXCGseywq8MSwGGO/1ff4b588eb300614101bf7813385fa30/Monster-821-MY18-Red-01-Model-Preview-1050x650.png" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="https://github.com/ndc07">Monster 821</a>
                      </h4>
                      <h5>$11,995</h5>
                      <p className="card-text">With its supremely sporty performance and agility, the new Monster 821 has been designed for maximum riding pleasure. The performance of the 109 HP Testastretta 11° engine is enhanced by the Ducati Safety Pack (ABS and Ducati Traction Control) and the Riding Modes, which guarantee maximum safety always and everywhere.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="https://github.com/ndc07"><img className="card-img-top" src="http://images.ctfassets.net/o6sr41tx16eu/39FiGaOid24ciiGYSaaC4S/a28b15aedc66dd93055222e4883792d3/Monster-1200-MY18-Red-01-Model-Preview-1050x650.png" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="https://github.com/ndc07">Monster 1200</a>
                      </h4>
                      <h5>$14,995</h5>
                      <p className="card-text">The new Monster 1200 fully embodies those values that have seen bikers’ hearts race for over 20 years. A sports icon that is totally renewed while staying faithful to the values that have made it unique: even more beautiful, even more technological, still unmistakeably Monster.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="https://github.com/ndc07"><img className="card-img-top" src="http://images.ctfassets.net/o6sr41tx16eu/2O0xZ0D6FOUoOYUU2MmQio/09a66e8c47b2538e52eb0eb178643bf7/MTS-950-MY18-Red-01-Model-Preview-1050x650.png" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="https://github.com/ndc07">Multistrada 950</a>
                      </h4>
                      <h5>$13,995</h5>
                      <p className="card-text">The new Multistrada 950 is the Ducati's smallest "multibike", provides all the excitement of the Multistrada in a way that makes it more accessible and versatile. Designed to put great performance within everyone's grasp, the Multistrada 950 is for those who want to get in some touring (and perhaps enjoy the company of a passenger) and those who want an agile fun bike that is ideal for everyday use.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="https://github.com/ndc07"><img className="card-img-top" src="http://images.ctfassets.net/o6sr41tx16eu/2ay7fiSZU0Am0yGkuC4cGU/9f3ab7d933bbad14bcd1c4a3868adaa0/Panigale-959-MY18-USA-Red-01-Model-Preview-1050x650.png" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="https://github.com/ndc07">959 Panigale</a>
                      </h4>
                      <h5>$15,395</h5>
                      <p className="card-text">The 959 Panigale Corse represents the highest sporting expression of the famous twin cylinder from Borgo Panigale. Thanks to the Öhlins suspensions, the lithium-ion battery and a dedicated livery inspired by the MotoGP colours, the 959 Panigale Corse is ready to hit the track.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="https://github.com/ndc07"><img className="card-img-top" src="http://images.ctfassets.net/o6sr41tx16eu/6FxpewbNdYE4KWqqIo62qG/801809968ef5af0b187b5e2b9d910af8/1299-Panigale-Final-Edition-MY18-01-Data-Sheet-768x480.png" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="https://github.com/ndc07">1299 Panigale</a>
                      </h4>
                      <h5>$39,900</h5>
                      <p className="card-text">Unmistakable design and uncompromising technical choices like the Superquadro engine with a record 116 mm bore. 209 hp of pure adrenaline and 142 Nm of breathtaking torque. Cutting-edge electronics with Bosch Inertial Platform to guarantee maximum control. 1299 Panigale: the object of desire of every motorcycle enthusiast.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

              </div>
              {/*row*/}

            </div>
            {/*col-lg-9*/}

          </div>
          {/*row*/}

        </div>
        {/*container*/}

        <div className="container">
          {/*Cart*/}
          <section className="section">
              <div className="table-responsive">
                  <table className="table product-table">
                      <thead>
                          <tr>
                              <th></th>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total Price</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">
                                  <img width="450" alt="" src="http://images.ctfassets.net/o6sr41tx16eu/2ay7fiSZU0Am0yGkuC4cGU/9f3ab7d933bbad14bcd1c4a3868adaa0/Panigale-959-MY18-USA-Red-01-Model-Preview-1050x650.png" />
                              </th>
                              <td>
                                  <h5>
                                      <strong>959 Panigale</strong>
                                  </h5>
                              </td>
                              <td>$15,395</td>
                              <td className="center-on-small-only">
                                  <span className="qty">1 </span>
                                  <div className="btn-group radio-group" data-toggle="buttons">
                                      <label className="btn btn-sm btn-info btn-rounded waves-effect waves-light">
                                          <a href="https://github.com/ndc07">—</a>
                                      </label>
                                      <label className="btn btn-sm btn-info btn-rounded waves-effect waves-light">
                                          <a href="https://github.com/ndc07">+</a>
                                      </label>
                                  </div>
                              </td>
                              <td>$15,395</td>
                              <td>
                                  <button type="button" className="btn btn-sm btn-info waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                      title="" data-original-title="Remove item">
                                      X
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <td colSpan="3"></td>
                              <td>
                                  <h4>
                                      <strong>Total Price</strong>
                                  </h4>
                              </td>
                              <td>
                                  <h4>
                                      <strong>$15,395</strong>
                                  </h4>
                              </td>
                              <td colSpan="3">
                                  <button type="button" className="btn btn-info waves-effect waves-light">Complete purchase
                                      <i className="fa fa-angle-right right"></i>
                                  </button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>
        </div>


        {/*Footer*/}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Ducati 2018</p>
          </div>
          {/*container*/}
        </footer>
      </div>
    );
  }
}

export default App;
