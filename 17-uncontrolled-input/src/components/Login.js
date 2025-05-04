function Login() {
   return (
      <>
         <h1>Login form</h1>

         <form>
            <label>
               Username:
               <input type="text" name="username" />
            </label>

            <label>
               Password:
               <input type="password" name="password" />
            </label>

            <button type="submit">Login</button>
         </form>
      </>
   );
}

export default Login;
