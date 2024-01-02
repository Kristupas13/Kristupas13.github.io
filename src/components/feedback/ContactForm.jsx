import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css"; // Import your CSS file

export function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgkpzz");
  if (state.succeeded) {
    return <p className="thank-you">Ačiū! Su jumis bus susisiekta</p>;
  }

  return (
      <div className="test">
      <div className="child">
        Parašykite mums į <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61552746337962">Facebook paskyrą</a>
        
      </div>
      <div className="or">
        arba užpildykite formą
      </div>
      <form className="flex-form" onSubmit={handleSubmit}>
        <div className="email-input">
          <label htmlFor="email">Elektroninis paštas</label>
          <input
            className="custom-input"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <textarea
          className="text-area"
          id="message"
          name="message"
          defaultValue="Noriu gauti Žiemos linksmybes!"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="christmas-button"
          type="submit"
          disabled={state.submitting}
        >
          Vykdyti
        </button>
      </form>
      </div>
  );
}
