import { Button } from "@/app/ui/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRedirect from "@/app/hooks/use-redirect";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

export function ContinueButton() {

  const redirect = useRedirect();

  return (
    <Button
    aria-label="Scroll to next section"
    onClick={ ()=> {
      redirect.scrollTo("projects")
    }}
    >
      <FontAwesomeIcon icon={faAngleDown} />
    </Button>
  );
}

export function ContinueButtonFallback() {
  return (
    <Button disabled>
      <FontAwesomeIcon icon={faAngleDown} />
    </Button>
  );
}