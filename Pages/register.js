import Layout from "../components/Layout";

const Register = () => {
  const registerForm = () => (
    <form>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Type your name" />
      </div>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="Type your email" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder="Type your password" />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning">Register</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Register</h1>
          <br />
          {registerForm()}
          <hr />
      </div>
    </Layout>
  );
};

export default Register;