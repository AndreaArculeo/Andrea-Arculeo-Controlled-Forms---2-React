export function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";

    console.log({ username, password, remember });
  }

  return (
    <>
      <h3>My Uncontrolled Form</h3>
      <form onSubmit={onLogin}>
        <input data-testid="username" name="username" />
        <input data-testid="password" name="password" />
        <input data-testid="remember" name="remember" type="checkbox" />

        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
}

// I vantaggi di un uncontrolled form rispetto ad un controlled potrebbero essere relativi ad una maggiore semplicità di codice, a scapito di meno controllo
