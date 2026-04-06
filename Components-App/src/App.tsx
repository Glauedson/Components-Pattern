import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertContent, AlertDescription, AlertIcon, AlertTitle } from "./components/alert";

export function App() {

  return (
    <div className="bg-mist-950 w-dvw h-dvh flex flex-col items-center justify-center gap-5">
      <Alert>
        <AlertIcon type="error"/>
        <AlertContent>
          <AlertTitle>
            Error Exemple
          </AlertTitle>
          <AlertDescription>
            This is an error alert example. Please check your input and try again.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert>
        <AlertIcon type="success"/>
        <AlertContent>
          <AlertTitle>
            Success Example
          </AlertTitle>
          <AlertDescription>
            This is a success alert example. Your input is valid and the operation was completed successfully.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert>
        <AlertIcon type="warning"/>
        <AlertContent>
          <AlertTitle>
            Warning Example
          </AlertTitle>
          <AlertDescription>
            This is a warning alert example. Please check your input and try again.
          </AlertDescription>
        </AlertContent>
      </Alert>

      <Alert>
        <AlertIcon type="info"/>
        <AlertContent>
          <AlertTitle>
            Info Example
          </AlertTitle>
          <AlertDescription>
            This is an info alert example. Here is some information you might find useful.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
