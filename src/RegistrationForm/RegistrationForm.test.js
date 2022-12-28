import { render, screen } from "@testing-library/react"
import RegistrationForm from "./RegistrationForm"

test("On Init the Form is loaded", () => {
  render(
    <RegistrationForm />
  )
  screen.debug();
}) 