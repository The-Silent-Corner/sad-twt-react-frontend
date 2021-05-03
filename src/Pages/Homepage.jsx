import React from "react";

const Homepage = () => {
  return (
    <>
      <section className="hero is-fullheight has-text-light mb-6">
        <img src="assets/people-woman-coffee-meeting.webp" alt="banner_pic" className="hero-background"/>
        <div className="hero-body">
          <div id="modal-text">
            <h1 className="title has-text-light">Trustworthy Tutors</h1>
            <p>Join us for good grades</p>
            <div>
              <button className="button mt-4">Register</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container column">
        <div className="title has-text-centered">About Us</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti dolores, dolorum eaque eos facilis
          fuga hic id labore molestias nam numquam obcaecati odit, quis quos reprehenderit, sunt tempora voluptatibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda ducimus excepturi, expedita
          illo impedit laborum mollitia natus nemo nulla quaerat quia. Corporis ipsa iure minima neque perspiciatis quia
          sit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea est eum iusto nemo. Facilis nam quia quis
          repudiandae tenetur ut. Autem cupiditate dicta incidunt minus numquam sequi veritatis vero.
        </p>
      </section>
      <section className="container column has-text-centered">
        <div className="columns mt-6">
          <div className="column">
            <div className="card">
              <div className="card-header">
                <div className="card-header-title is-centered">Math</div>
              </div>
              <div className="card-image">
                <img src="assets/math.webp" alt="science.webp"></img>
              </div>
              <div className="modal-card-body has-text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci optio possimus reprehenderit sunt.
                Animi,
                culpa distinctio ea eos minima omnis quasi saepe sapiente similique ullam? Commodi deserunt
                necessitatibus quis
                repellat!
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-header">
                <div className="card-header-title is-centered">Science</div>
              </div>
              <div className="card-image">
                <img src="assets/technology.webp" alt=""></img>
              </div>
              <div className="modal-card-body has-text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci optio possimus reprehenderit sunt.
                Animi,
                culpa distinctio ea eos minima omnis quasi saepe sapiente similique ullam? Commodi deserunt
                necessitatibus quis
                repellat!
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-header">
                <div className="card-header-title is-centered">Technology</div>
              </div>
              <div className="card-image">
                <img src="assets/science.webp" alt="science.webp"></img>
              </div>
              <div className="modal-card-body has-text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci optio possimus reprehenderit sunt.
                Animi,
                culpa distinctio ea eos minima omnis quasi saepe sapiente similique ullam? Commodi deserunt
                necessitatibus quis
                repellat!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container column is-half">
        <div className="title has-text-centered">Contact Us</div>
        <form action="/contact" method="post">
          <label className="label" htmlFor="first-name">
            First Name
            <input type="text" className="input" />
          </label>
          <label htmlFor="last-name" className="label">
            Last Name
            <input type="text" className="input" />
          </label>
          <label htmlFor="email" className="label">
            Email
            <input type="email" className="input" />
          </label>
          <div className="has-text-centered">
            <button className="button has-text-centered">Contact</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Homepage;