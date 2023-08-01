import { Application } from "@hotwired/stimulus";

const application = Application.start();

// Configure Stimulus development experience
application.debug = document.documentElement.classList.contains("debug");
window.Stimulus = application;

// Load external controllers
import PasswordVisibility from 'stimulus-password-visibility'
application.register('password-visibility', PasswordVisibility)

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading";
eagerLoadControllersFrom("controllers", application);

