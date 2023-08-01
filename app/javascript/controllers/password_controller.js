import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['input', 'icon']

  connect () {
    this.hidden = this.inputTarget.type === 'password'
  }

  toggle (e) {
    e.preventDefault()

    this.inputTarget.type = this.hidden ? 'text' : 'password'
    this.hidden = !this.hidden

    this.iconTargets.forEach(icon => icon.classList.toggle("hidden"))
  }
}
