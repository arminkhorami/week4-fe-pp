function Registration() {
  return (
    <section className="section">
      <h2>Registration</h2>

      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" id="confirm" />
        </div>

        <div className="form-control">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" />
        </div>

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </section>
  );
}

export default Registration;
