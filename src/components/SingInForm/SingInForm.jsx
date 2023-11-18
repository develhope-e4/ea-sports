import { Link } from 'react-router-dom';

const SignInForm = () => {
 return (
    <div className="signin">
      <h2>Sign In</h2>
      <form>
        <input type="text" placeholder="Phone or Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <p>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </p>
      <p>
        Forgot your password?{' '}
        <Link to="/reset-password">Reset Password</Link>
      </p>
      <p>
        Don't have an account? <Link to="/create-account">Create Account</Link>
      </p>
    </div>
 );
};

export default SignInForm;