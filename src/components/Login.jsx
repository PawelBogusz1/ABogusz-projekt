export default function Login() {
    return(
<div class="login-backdrop is-hidden">
  <div class="login-modal">
    <p class="login-header">Login Form</p>
    <form action="#" class="login-form">
      <div class="field email">
        <div class="input-area">
          <input type="text" placeholder="Email Address" />
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Email can't be blank</div>
      </div>
      <div class="field password">
        <div class="input-area">
          <input type="password" placeholder="Password" />
          <i class="icon fas fa-lock"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Password can't be blank</div>
      </div>
      <div class="login-info-error"></div>
      <input type="submit" value="Login" class="login-button" />
    </form>
  </div>
</div>
    )
}