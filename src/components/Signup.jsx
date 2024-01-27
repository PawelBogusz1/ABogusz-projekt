
export default function Signup() {
    return(
<div class="singup-backdrop is-hidden">
  <div class="singup-container">
    <p class="singup-header">Signup</p>
    <form action="#" class="singup-form">
      <div class="field email-field">
        <div class="input-field">
          <input type="email" placeholder="Enter your email" class="email" />
        </div>
        <span class="singup-error email-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">Please enter a valid email</p>
        </span>
      </div>
      <div class="field user-name-field">
        <div class="input-field">
          <input type="text" placeholder="Enter your name" class="user-name" />
        </div>
        <span class="singup-error user-name-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">
            Please enter a nickname of at least 4 characters and no more than 20
            characters.
          </p>
        </span>
      </div>
      <div class="field create-password">
        <div class="input-field">
          <input
            type="password"
            placeholder="Create password"
            class="password"
          />
          <i class="bx bx-hide show-hide"></i>
        </div>
        <span class="singup-error password-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">
            Please enter atleast 8 charatcer with number, symbol, small and
            capital letter.
          </p>
        </span>
      </div>
      <div class="field confirm-password">
        <div class="input-field">
          <input
            type="password"
            placeholder="Confirm password"
            class="cPassword"
          />
          <i class="bx bx-hide show-hide"></i>
        </div>
        <span class="singup-error cPassword-error">
          <i class="bx bx-error-circle singup-error-icon"></i>
          <p class="singup-error-text">Password don't match</p>
        </span>
      </div>
      <div class="singup-info-error"></div>
      <div class="input-field singup-button">
        <input type="submit" value="Signup Now" />
      </div>
    </form>
  </div>
</div>
    )
}
